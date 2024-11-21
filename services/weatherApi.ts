const API_KEY = '77055f3836356621dc9baee18992c5db';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// درخواست برای وضعیت فعلی آب‌وهوا
export const getCurrentWeather = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch current weather data');
  }
  return await response.json();
};

// درخواست برای پیش‌بینی چندروزه
export const getForecast = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  return await response.json();
};
