'use client';

import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchCurrentWeather } from '../../redux/slices/currentWeatherSlice';
import { fetchForecast } from '../../redux/slices/forecastSlice';

export default function WeatherSearch() {
  const [city, setCity] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchCurrentWeather(city));
      dispatch(fetchForecast(city));
    }
  };

  return (
    <div className="flex items-center justify-center mt-6 ">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-2 rounded-lg shadow w-2/3 text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 ml-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </div>
  );
}