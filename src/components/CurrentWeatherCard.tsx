'use client';

import { useAppSelector } from '../../redux/hooks';

export default function CurrentWeatherCard() {
  const weather = useAppSelector((state) => state.currentWeather.data);

  if (!weather) return null;

  return (
    <div className="bg-[#1e293b] rounded-lg p-6 m-4 text-white  ">
      <h2 className="text-2xl font-bold mb-2 text-right">{weather.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-35 h-35 "
        />
        <div>
          <p className="text-lg font-semibold">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
      </div>
    </div>
  );
}
