import { useAppSelector } from '../../redux/hooks';
import { ForecastItem } from '../../redux/slices/types/forecastTypes';

export default function ForecastCards() {
  // دریافت داده پیش‌بینی از Redux
  const forecast = useAppSelector((state) => state.forecast.data);

  // بررسی خطا یا خالی بودن داده
  if (!forecast || forecast.length === 0) {
    return <p className="text-white text-center">No forecast data available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-4">
      {forecast.slice(0, 8).map((item: ForecastItem, index: number) => (
        <div
          key={index}
          className="bg-[#1e293b] rounded-lg p-4 flex flex-col items-center text-white"
        >
          <p className="mb-2 text-lg font-bold">
            {new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-16 h-16 mb-2"
          />
          <p>{item.weather[0].description}</p>
          <p className="text-xl font-bold mt-2">{item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}