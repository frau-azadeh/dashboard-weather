interface WeatherProps {
  rain?: { '1h': number };
  uvi?: number;
  wind?: { speed: number };
  main?: { humidity: number };
}

export default function TodayHighlights({ weather }: { weather: WeatherProps }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="bg-cardBg  rounded-lg p-4">
        <h3 className="text-sm font-bold">Chance of Rain</h3>
        <p className="text-2xl font-bold text-accent">
          {weather?.rain ? `${weather.rain['1h']}%` : '0%'}
        </p>
      </div>
      <div className="bg-cardBg shadow-md rounded-lg p-4">
        <h3 className="text-sm font-bold">UV Index</h3>
        <p className="text-2xl font-bold text-accent">{weather?.uvi || 'N/A'}</p>
      </div>
      <div className="bg-cardBg shadow-md rounded-lg p-4">
        <h3 className="text-sm font-bold">Wind Status</h3>
        <p className="text-2xl font-bold text-accent">{weather?.wind?.speed || 'N/A'} km/h</p>
      </div>
      <div className="bg-cardBg shadow-md rounded-lg p-4">
        <h3 className="text-sm font-bold">Humidity</h3>
        <p className="text-2xl font-bold text-accent">{weather?.main?.humidity || 'N/A'}%</p>
      </div>
    </div>
  );
}