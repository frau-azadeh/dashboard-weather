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

      <div className="flex-1 p-6">
        <CityList />
        <WeatherSearch />
        <CurrentWeatherCard />
        <ForecastCards />
        {weather && <TodayHighlights weather={weather} />}
      </div>
    </div>
  );
}