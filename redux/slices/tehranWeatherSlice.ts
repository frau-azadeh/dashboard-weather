import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface WeatherData {
  dt: number;
  temp: number;
  icon: string;
  description: string;
}

export interface TehranWeatherState {
  forecast: WeatherData[];
  currentWeather: WeatherData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: TehranWeatherState = {
  forecast: [],
  currentWeather: null,
  status: 'idle',
};

export const fetchTehranWeather = createAsyncThunk('tehranWeather/fetchTehranWeather', async () => {
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=Tehran&appid=77055f3836356621dc9baee18992c5db&units=metric'
  );
  const data = await response.json();

  const forecast = data.list.map((item: any) => ({
    dt: item.dt,
    temp: item.main.temp,
    icon: item.weather[0].icon,
    description: item.weather[0].description,
  }));

  const currentWeather = {
    dt: data.list[0].dt,
    temp: data.list[0].main.temp,
    icon: data.list[0].weather[0].icon,
    description: data.list[0].weather[0].description,
  };

  return { forecast, currentWeather };
});

const tehranWeatherSlice = createSlice({
  name: 'tehranWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTehranWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTehranWeather.fulfilled, (state, action) => {
        state.forecast = action.payload.forecast;
        state.currentWeather = action.payload.currentWeather;
        state.status = 'succeeded';
      })
      .addCase(fetchTehranWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default tehranWeatherSlice.reducer;