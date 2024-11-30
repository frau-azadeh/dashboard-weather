'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchDefaultCitiesWeather } from '../../redux/slices/cityWeatherSlice';

import Sidebar from '@/components/Sidebar';
import CityList from '@/components/CityList';
import WeatherSearch from '@/components/WeatherSearch';
import TehranWeather from '@/components/TehranWeather';
import ForecastCards from '@/components/ForecastCards';
import CurrentWeatherCard from '@/components/CurrentWeatherCard';
import Footer from '@/components/Footer';
import WorldMap from '@/components/WorldMap';

export default function Home() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state)=> state.currentWeather.data);
  useEffect(() => {
    dispatch(fetchDefaultCitiesWeather());
  }, [dispatch]);

  return (
    <>
    <div className="flex bg-primary min-h-screen text-textMain ">
      <div className="w-16 md:w-20 lg:w-24">
        <Sidebar />
      </div>
      <div className="flex  ml-16  flex-col lg:flex-row md:ml-0">
        <div className='flex-none w-[90%] lg:w-2/3 '>
          <CityList />
          <WeatherSearch />
          {weather && <CurrentWeatherCard />}
          <ForecastCards />        
        </div>
        <div className='flex-none w-[90%] lg:w-1/3 flex-col '>
          <WorldMap />
          <TehranWeather />
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
}