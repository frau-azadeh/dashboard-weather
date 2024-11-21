'use client';

import { useAppSelector } from '../../redux/hooks';

export default function CityList() {
  const cities = useAppSelector((state) => state.cityWeather.cities);

  if (!cities.length) return <p>No cities to show. Add one!</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cities.map((city, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
        >
          <h2 className="text-xl font-bold text-gray-300">{city.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-16 h-16"
          />
          <p>{city.weather[0].description}</p>
          <p>{city.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}