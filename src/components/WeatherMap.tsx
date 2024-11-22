'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from "../../redux/slices/worldMapSlice";
import { RootState, AppDispatch } from "../../redux/store";

// Import dynamic برای MapContainer و دیگر اجزای Leaflet
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

import { FaMapPin } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ایجاد آیکن زرد
const YellowIcon = L.divIcon({
  html: renderToStaticMarkup(<FaMapPin style={{ color: "yellow", fontSize: "24px" }} />),
  className: "",
});

const WeatherMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { weatherData, status } = useSelector((state: RootState) => state.worldMap);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWeatherData());
    }
  }, [dispatch, status]);

  return (
    <div className='h-300  w-100 flex justify-center items-center' style={{ backgroundColor: "#1e293b",borderRadius:"25PX", height: "100vh", width: "100%" }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{backgroundColor: "#1e293b",borderRadius:"25PX", height: "100%", width: "100%" }}
        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
      >
        <TileLayer
  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; OpenStreetMap contributors'
  />

        {weatherData.map((city) => (
          <Marker key={city.name} position={city.coords} icon={YellowIcon}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">{city.name}</h3>
                {city.weather ? (
                  <>
                    <p>{city.weather.main.temp}°C</p>
                    <p>{city.weather.weather[0]?.description}</p>
                  </>
                ) : (
                  <p>No data available</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
