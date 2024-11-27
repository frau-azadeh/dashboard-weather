import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../src/utils/axiosInstance';
import { CityWeather, CityWeatherState } from '../slices/types/cityWeatherTypes';

const initialState: CityWeatherState = {
  cities: [],
  defaultCities: ['London', 'New York', 'Tokyo', 'Berlin'],
  status: 'idle',
  error: null,
};

// Thunk برای دریافت آب‌وهوای یک شهر
export const fetchCityWeather = createAsyncThunk<CityWeather, string>(
  'cityWeather/fetchCityWeather',
  async (city, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<CityWeather>('weather', {
        params: { q: city },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
  }
);

// Thunk برای دریافت داده‌های پیش‌فرض شهرها
export const fetchDefaultCitiesWeather = createAsyncThunk<void, void>(
  'cityWeather/fetchDefaultCitiesWeather',
  async (_, { dispatch }) => {
    const defaultCities = initialState.defaultCities;
    const promises = defaultCities.map((city) => dispatch(fetchCityWeather(city)));
    await Promise.all(promises);
  }
);

// Slice
const cityWeatherSlice = createSlice({
  name: 'cityWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCityWeather.fulfilled, (state, action: PayloadAction<CityWeather>) => {
        state.status = 'succeeded';
        const cityExists = state.cities.find((city) => city.name === action.payload.name);
        if (!cityExists) {
          state.cities.push(action.payload);
        }
      })
      .addCase(fetchCityWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchDefaultCitiesWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDefaultCitiesWeather.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(fetchDefaultCitiesWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default cityWeatherSlice.reducer;
