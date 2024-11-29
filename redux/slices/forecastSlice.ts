import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../src/utils/axiosInstance';

export interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface ForecastResponse {
  list: ForecastItem[];
}

interface ForecastState {
  data: ForecastItem[] | null; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ForecastState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchForecast = createAsyncThunk<ForecastItem[], string>(
  'forecast/fetchForecast',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<ForecastResponse>(`forecast?q=${city}`);
      return response.data.list; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred'); 
    }
  }
);

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.status = 'loading'; 
        state.error = null;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.data = action.payload; 
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.payload as string; 
      });
  },
});

export default forecastSlice.reducer;