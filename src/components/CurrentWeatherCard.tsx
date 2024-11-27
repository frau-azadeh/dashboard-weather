'use client';

import { useAppSelector } from '../../redux/hooks';

export default function CurrentWeatherCard() {
  const weather = useAppSelector((state) => state.currentWeather.data);

  if (!weather) return <p className="text-white">No current weather data available</p>;

  return (
    <div className="bg-[#1e293b] rounded-lg p-6 m-4 text-white">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-16 h-16"
        />
        <div className="ml-4">
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
        </div>
      </div>
    </div>
  );
}