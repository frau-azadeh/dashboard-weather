export interface WeatherData {
    dt: number;
    temp: number; 
    icon: string; 
    description: string; 
  }
  
  export interface TehranWeatherState {
    forecast: WeatherData[];
    currentWeather: WeatherData | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  }