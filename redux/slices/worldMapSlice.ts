'use client';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Weather {
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface CityWeather {
  name: string;
  coords: [number, number];
  weather: Weather | null;
}

interface WorldMapState {
  weatherData: CityWeather[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const cities = [
  { name: "New York", coords: [40.7128, -74.0060] },
  { name: "London", coords: [51.5074, -0.1278] },
  { name: "Paris", coords: [48.8566, 2.3522] },
  { name: "Tokyo", coords: [35.6895, 139.6917] },
  { name: "Sydney", coords: [-33.8688, 151.2093] },
  { name: "Moscow", coords: [55.7558, 37.6173] },
  { name: "Rio de Janeiro", coords: [-22.9068, -43.1729] },
  { name: "Cape Town", coords: [-33.9249, 18.4241] },
  { name: "Beijing", coords: [39.9042, 116.4074] },
  { name: "Mumbai", coords: [19.0760, 72.8777] },
];

const initialState: WorldMapState = {
  weatherData: [],
  status: "idle",
  error: null,
};

// تعریف AsyncThunk
export const fetchWeatherData = createAsyncThunk("worldMap/fetchWeather", async () => {
  const apiKey = "77055f3836356621dc9baee18992c5db";
  const promises = cities.map(async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords[0]}&lon=${city.coords[1]}&appid=${apiKey}&units=metric`
    );
    const data: Weather = await response.json();
    return { ...city, weather: data };
  });

  return await Promise.all(promises);
});

const worldMapSlice = createSlice({
  name: "worldMap",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData = action.payload as CityWeather[];
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch weather data";
      });
  },
});

export default worldMapSlice.reducer;