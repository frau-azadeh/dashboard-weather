export interface CityWeather {
    name: string; // نام شهر
    weather: {
      description: string; // توضیحات آب‌وهوا
      icon: string; // آیکون آب‌وهوا
    }[];
    main: {
      temp: number; // دما
      humidity: number; // رطوبت
    };
  }
  
  export interface CityWeatherState {
    cities: CityWeather[];
    defaultCities: string[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }