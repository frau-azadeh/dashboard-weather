'use client';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCurrentWeather } from '../../redux/slices/currentWeatherSlice';
import { fetchForecast } from '../../redux/slices/forecastSlice';
import { FiSearch } from 'react-icons/fi'; // آیکن جستجو از react-icons

export default function WeatherSearch() {
  const [city, setCity] = useState('');
  const dispatch = useAppDispatch();

  const currentWeatherError = useAppSelector((state) => state.currentWeather.error);
  const forecastError = useAppSelector((state) => state.forecast.error);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchCurrentWeather(city));
      dispatch(fetchForecast(city));
      setCity('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full my-6 px-4">
      <form onSubmit={handleSearch} className="relative w-full">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for your city..."
          className="w-full py-4 px-5 text-white placeholder-gray-400 bg-[#1e293b] rounded-xl shadow-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-4 text-white flex items-center justify-center focus:outline-none"
        >
          <FiSearch size={24} /> {/* آیکن جستجو */}
        </button>
      </form>

      {/* نمایش خطاها */}
      {currentWeatherError && (
        <p className="mt-4 text-red-500">
          Failed to fetch current weather data: {currentWeatherError}
        </p>
      )}
      {forecastError && (
        <p className="mt-4 text-red-500">
          Failed to fetch forecast data: {forecastError}
        </p>
      )}
    </div>
  );
}
