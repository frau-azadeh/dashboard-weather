import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './slices/services/weatherApi';
import cityWeatherReducer from './slices/cityWeatherSlice';
import currentWeatherReducer from './slices/currentWeatherSlice';
import forecastReducer from './slices/forecastSlice';
import tehranWeatherReducer from './slices/tehranWeatherSlice';

export const store = configureStore({
  reducer: {
    cityWeather: cityWeatherReducer,
    currentWeather: currentWeatherReducer,
    forecast: forecastReducer,
    tehranWeather: tehranWeatherReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;