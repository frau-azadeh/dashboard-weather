'use client';

import { useAppSelector } from '../../redux/hooks';

export default function CityList() {
  const cities = useAppSelector((state) => state.cityWeather.cities);

  if (!cities.length) return <p>No cities to show. Add one!</p>;

  return (
    <div className=" md:flex-row flex-col  flex ">
      {cities.map((city, index) => (
        <div
          key={index}
          className="bg-[#1e293b] shadow-lg rounded-lg p-4 grow m-4 "
        >
          <h2 className="text-xl font-bold text-white text-right">{city.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-35 h-35  "
          />
          <p className="text-white">{city.weather[0].description}</p>
          <p className='text-white'>{city.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}