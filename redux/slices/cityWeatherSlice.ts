import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../../services/weatherApi';

interface CityWeather {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
}

interface CityWeatherState {
  cities: CityWeather[];
  defaultCities: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CityWeatherState = {
  cities: [],
  defaultCities: ['London', 'New York', 'Tokyo', 'Berlin'],
  status: 'idle',
  error: null,
};

// Thunk برای دریافت داده‌های یک شهر
export const fetchCityWeather = createAsyncThunk(
  'cityWeather/fetchCityWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      return await getCurrentWeather(city);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk برای دریافت داده‌های پیش‌فرض
export const fetchDefaultCitiesWeather = createAsyncThunk(
  'cityWeather/fetchDefaultCitiesWeather',
  async (_, { dispatch }) => {
    const defaultCities = initialState.defaultCities;
    const promises = defaultCities.map((city) => dispatch(fetchCityWeather(city)));
    await Promise.all(promises);
  }
);

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
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';

        const cityExists = state.cities.find((city) => city.name === action.payload.name);
        if (!cityExists) {
          state.cities.push(action.payload);
        }
      })
      .addCase(fetchCityWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default cityWeatherSlice.reducer;