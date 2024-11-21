import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getForecast } from '../../services/weatherApi';

interface ForecastItem {
  dt_txt: string; // تاریخ و زمان
  main: {
    temp: number; // دما
    humidity: number; // رطوبت
  };
  weather: { description: string; icon: string }[]; // وضعیت آب‌وهوا
}

interface ForecastState {
  data: {
    list: ForecastItem[]; // لیست پیش‌بینی روزانه
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ForecastState = {
  data: null,
  status: 'idle',
  error: null,
};

// Thunk برای دریافت پیش‌بینی چندروزه
export const fetchForecast = createAsyncThunk(
  'forecast/fetchForecast',
  async (city: string, { rejectWithValue }) => {
    try {
      return await getForecast(city);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice برای مدیریت پیش‌بینی چندروزه
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