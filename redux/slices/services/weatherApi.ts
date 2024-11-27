import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  endpoints: (builder) => ({
    getCityWeather: builder.query({
      query: (city: string) => `weather?q=${city}&appid=77055f3836356621dc9baee18992c5db&units=metric`,
    }),
    getForecast: builder.query({
      query: (city: string) => `forecast?q=${city}&appid=77055f3836356621dc9baee18992c5db&units=metric`,
    }),
    getTehranWeather: builder.query({
      query: () => `forecast?q=Tehran&appid=77055f3836356621dc9baee18992c5db&units=metric`,
    }),
  }),
});

export const { useGetCityWeatherQuery, useGetForecastQuery, useGetTehranWeatherQuery } =
  weatherApi;