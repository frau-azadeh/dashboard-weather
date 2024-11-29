import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../src/utils/axiosInstance';

interface CurrentWeather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface CurrentWeatherState {
  data: CurrentWeather | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CurrentWeatherState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchCurrentWeather = createAsyncThunk<CurrentWeather, string>(
  'currentWeather/fetchCurrentWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`weather?q=${city}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
  }
);

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default currentWeatherSlice.reducer;