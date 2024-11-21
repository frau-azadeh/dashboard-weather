'use client';

import { useAppSelector } from '../../redux/hooks';

export default function CurrentWeatherCard() {
  const weather = useAppSelector((state) => state.currentWeather.data);

  if (!weather) return null;

  return (
    <div className="bg-cardBg shadow-md rounded-lg p-6 mt-6 text-primary max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-16 h-16 mr-4"
        />
        <div>
          <p className="text-lg font-semibold">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
        </div>
      </div>
    </div>
  );
}
