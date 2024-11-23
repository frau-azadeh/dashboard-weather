'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchDefaultCitiesWeather } from '../../redux/slices/cityWeatherSlice';

import Sidebar from '@/components/Sidebar';
import CityList from '@/components/CityList';
import WeatherSearch from '@/components/WeatherSearch';
import CurrentWeatherCard from '@/components/CurrentWeatherCard';
import ForecastCards from '@/components/ForecastCards';
import TodayHighlights from '@/components/TodayHighlights';
import TehranWeather from '@/components/TehranWeather';


export default function Home() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.currentWeather.data);

  useEffect(() => {
    dispatch(fetchDefaultCitiesWeather());
  }, [dispatch]);

  return (
    <div className="flex bg-primary min-h-screen text-textMain">
      <div className="w-16 md:w-20 lg:w-24">
        <Sidebar />
      </div>

      <div className="flex p-6 w-full flex-col lg:flex-row">
        <div className='flex-none w-full lg:w-2/3 '>
          <CityList />
          <WeatherSearch />
          <CurrentWeatherCard />
          <ForecastCards />
          {weather && <TodayHighlights weather={weather} />}
        </div>
        <div className='flex-none w-full lg:w-1/3 flex-col lg:flex-row'>
            <div className="bg-[#1e293b] rounded-lg pl-8 mt-4 ">
                  <img  src="../../../images/world.svg" alt="world" width={300} height={400}/>
                </div>
            <TehranWeather />
        </div>
      </div>
    </div>
  );
}