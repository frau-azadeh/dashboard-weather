'use client';

import { useAppSelector } from '../../redux/hooks';

export default function ForecastCards() {
  const forecast = useAppSelector((state) => state.forecast.data);

  if (!forecast) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
      {forecast.list.slice(0, 5).map((day, index) => (
        <div
          key={index}
          className="bg-cardBg shadow-md rounded-lg p-4 flex flex-col items-center text-primary"
        >
          <p className="text-lg font-semibold mb-2">
            {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-12 h-12"
          />
          <p className="text-xl font-bold mt-2">{day.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}