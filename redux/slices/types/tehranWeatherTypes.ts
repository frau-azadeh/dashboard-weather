export interface WeatherData {
    dt: number; // تاریخ و زمان
    temp: number; // دما
    icon: string; // آیکون آب‌وهوا
    description: string; // توضیحات آب‌وهوا
  }
  
  export interface TehranWeatherState {
    forecast: WeatherData[];
    currentWeather: WeatherData | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  }