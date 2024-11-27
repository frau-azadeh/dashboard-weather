export interface CurrentWeather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface CurrentWeatherState {
  data: CurrentWeather | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}