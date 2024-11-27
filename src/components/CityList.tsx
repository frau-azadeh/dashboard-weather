import React from 'react';
import { useAppSelector } from '../../redux/hooks';

export default function CityList() {
  const cities = useAppSelector((state) => state.cityWeather.cities);
  const status = useAppSelector((state) => state.cityWeather.status);

  if (status === 'loading') {
    return <p className="text-center text-gray-400">Loading cities...</p>;
  }

  if (!cities || cities.length === 0) {
    return <p className="text-center text-gray-400">No cities available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cities.map((city) => (
        <div key={city.name} className="bg-[#1e293b] shadow-lg rounded-lg p-4 m-4">
          <h2 className="text-xl font-bold text-white">{city.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-20 h-20 mx-auto"
          />
          <p className="text-white">{city.weather[0].description}</p>
          <p className="text-white text-lg">{Math.round(city.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}
