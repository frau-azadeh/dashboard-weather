import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from './slices/currentWeatherSlice';
import forecastReducer from './slices/forecastSlice';
import cityWeatherReaducer from './slices/cityWeatherSlice';
import tehranWeatherReaducer from './slices/tehranWeatherSlice';

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    forecast: forecastReducer,
    cityWeather: cityWeatherReaducer,
    tehranWeather: tehranWeatherReaducer,
  },
});

// تایپ‌های عمومی
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;