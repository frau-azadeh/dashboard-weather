import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getLottieIcon } from "../../src/utils/iconMapper";
import LottieIcon from "@/components/LottieIcon";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Weather {
  description: string;
  icon: string;
}

interface Main {
  temp: number;
}

interface City {
  name: string;
  weather: Weather[];
  main: Main;
}

interface WeatherCardProps {
  city?: City;
  loading: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, loading }) => {
  const cardClasses = "bg-[#1e293b] shadow-lg rounded-lg p-4 m-4 text-white";

  return (
    <div className={cardClasses}>
      <h2 className="text-xl font-bold">
        {loading ? <Skeleton width="70%" /> : city?.name}
      </h2>

      <div className="flex justify-center items-center mt-4">
        {loading ? (
          <Skeleton circle width={100} height={100} />
        ) : (
          <LottieIcon icon={getLottieIcon(city!.weather[0].icon)} />
        )}
      </div>

      <p className="capitalize mt-4">
        {loading ? <Skeleton width="60%" /> : city?.weather[0].description}
      </p>

      <p className="text-lg">
        {loading ? (
          <Skeleton width="40%" />
        ) : (
          `${Math.round(city!.main.temp)}°C`
        )}
      </p>
    </div>
  );
};

const CityList: React.FC = () => {
  const cities: City[] = useAppSelector((state) => state.cityWeather.cities);
  const status: string = useAppSelector((state) => state.cityWeather.status);

  if (["loading", "idle"].includes(status)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {[...Array(4)].map((_, index) => (
          <WeatherCard key={index} loading={true} />
        ))}
      </div>
    );
  }

  if (!cities || cities.length === 0) {
    return <p className="text-center text-gray-400">No cities available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cities.map((city) => (
        <WeatherCard key={city.name} city={city} loading={false} />
      ))}
    </div>
  );
};

export default CityList;
