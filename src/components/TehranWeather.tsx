'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchTehranWeather } from '../../redux/slices/tehranWeatherSlice';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const TehranWeather = () => {
  const dispatch = useAppDispatch();
  const { forecast, currentWeather, status } = useAppSelector((state) => state.tehranWeather);

  useEffect(() => {
    dispatch(fetchTehranWeather());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Failed to fetch data</div>;

  // زمان فعلی
  const now = new Date().getTime();

  // فیلتر کردن پیش‌بینی برای 24 ساعت آینده و فقط 4 زمان خاص
  const filteredForecast = forecast?.filter((data) => {
    const forecastTime = new Date(data.dt * 1000).getTime();
    const hour = new Date(data.dt * 1000).getHours();
    return (
      forecastTime > now &&
      forecastTime <= now + 24 * 60 * 60 * 1000 && // 24 ساعت آینده
      (hour === 6 || hour === 12 || hour === 18 || hour === 0) // فقط ساعت‌های خاص
    );
  });

  // داده‌های نمودار
  const chartData = {
    labels: filteredForecast?.map((data) =>
      new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    ),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: filteredForecast?.map((data) => data.temp),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      {/* نمایش آب و هوای فعلی */}
      <div className="mb-6 p-4 bg-[#1e293b] rounded-lg flex justify-between items-center text-white">
        <div>
          <h2 className="text-2xl font-bold">Current Weather in Tehran</h2>
          <p className="text-lg">{currentWeather?.temp}°C</p>
          <p className="text-sm">{currentWeather?.description}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather?.icon}@2x.png`}
          alt={currentWeather?.description}
          className="w-16 h-16"
        />
        <p>{currentWeather?.dt ?new Date(currentWeather.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        :'Loading ...'}
        </p>
      </div>

      {/* پیش‌بینی برای زمان‌های خاص */}
      <div className="grid grid-cols-4 gap-4">
        {filteredForecast?.map((data, idx) => (
          <div key={idx} className="p-4 bg-[#1e293b] rounded-lg text-white text-center">
            <p>{new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <img
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt={data.description}
              className="w-12 h-12 mx-auto"
            />
            <p>{data.temp}°C</p>
          </div>
        ))}
      </div>

      {/* نمودار تغییر دما */}
      <div className="m-4 bg-[#1e293b] rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4">Temperature Changes</h3>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TehranWeather;