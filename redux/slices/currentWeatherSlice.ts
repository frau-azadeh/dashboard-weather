import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../../services/weatherApi';

// تایپ وضعیت آب‌وهوا
interface CurrentWeatherState {
  data: {
    name: string;
    weather: { description: string; icon: string }[];
    main: { temp: number; humidity: number };
    wind: { speed: number };
  } | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CurrentWeatherState = {
  data: null,
  status: 'idle',
  error: null,
};

// Thunk برای دریافت وضعیت فعلی
export const fetchCurrentWeather = createAsyncThunk(
  'currentWeather/fetchCurrentWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      return await getCurrentWeather(city);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice برای مدیریت وضعیت فعلی
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