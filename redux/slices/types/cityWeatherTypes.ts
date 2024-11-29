export interface CityWeather {
    name: string; 
    weather: {
      description: string; 
      icon: string; 
    }[];
    main: {
      temp: number; 
      humidity: number;
    };
  }
  
  export interface CityWeatherState {
    cities: CityWeather[];
    defaultCities: string[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }