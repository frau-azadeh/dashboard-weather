'use client';

import { useAppSelector } from '../../redux/hooks';

export default function ForecastCards() {
  const forecast = useAppSelector((state) => state.forecast.data);

  if (!forecast) return null;

  return (
    <div className="md:flex-row flex-col  flex m-4">
      {forecast.list.slice(0, 5).map((day, index) => (
        <div
          key={index}
          className="bg-[#1e293b]  rounded-lg p-4 flex-grow flex-col m-1 items-center text-white"
        >
          <p className="text-lg font-semibold mb-2 text-right">
            {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-35 h-35 "
          />
          <p className="text-white">{day.weather[0].description}</p>
          <p className="text-xl font-bold mt-2">{day.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}