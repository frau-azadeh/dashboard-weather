


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: '77055f3836356621dc9baee18992c5db', // کلید API خود را جایگزین کنید
    units: 'metric', // واحد دما بر حسب سانتی‌گراد
  },
});

export default axiosInstance;