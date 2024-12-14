"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDefaultCitiesWeather } from "../../redux/slices/cityWeatherSlice";

import Sidebar from "@/components/Sidebar";
import CityList from "@/components/CityList";
import WeatherSearch from "@/components/WeatherSearch";
import TehranWeather from "@/components/TehranWeather";
import ForecastCards from "@/components/ForecastCards";
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import Footer from "@/components/Footer";
import WorldMap from "@/components/WorldMap";

export default function Home() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.currentWeather.data);

  useEffect(() => {
    dispatch(fetchDefaultCitiesWeather());
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-[auto_1fr] min-h-screen bg-primary text-textMain">
        {/* Sidebar */}
        <div className="w-16 md:w-20 lg:w-24">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <CityList />
            <WeatherSearch />
            {weather && <CurrentWeatherCard />}
            <ForecastCards />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <WorldMap />
            <TehranWeather />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
