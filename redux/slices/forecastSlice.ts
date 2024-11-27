import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../src/utils/axiosInstance';

// تعریف نوع برای هر آیتم پیش‌بینی
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

// تعریف نوع برای پاسخ API
export interface ForecastResponse {
  list: ForecastItem[];
}

// تعریف نوع برای state
interface ForecastState {
  data: ForecastItem[] | null; // لیستی از آیتم‌های پیش‌بینی
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// مقدار اولیه state
const initialState: ForecastState = {
  data: null,
  status: 'idle',
  error: null,
};

// Thunk برای دریافت داده‌های پیش‌بینی
export const fetchForecast = createAsyncThunk<ForecastItem[], string>(
  'forecast/fetchForecast',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<ForecastResponse>(`forecast?q=${city}`);
      return response.data.list; // بازگشت لیست پیش‌بینی‌ها
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred'); // مدیریت خطا
    }
  }
);

// ایجاد Slice برای پیش‌بینی
const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.status = 'loading'; // وضعیت در حال بارگذاری
        state.error = null;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.status = 'succeeded'; // وضعیت موفق
        state.data = action.payload; // ذخیره داده‌های پیش‌بینی
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = 'failed'; // وضعیت شکست
        state.error = action.payload as string; // ذخیره پیام خطا
      });
  },
});

// خروجی reducer برای استفاده در store
export default forecastSlice.reducer;