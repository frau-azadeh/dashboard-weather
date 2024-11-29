const weatherToLottieMap: Record<string, string> = {
    '01d': 'sunny', 
    '01n': 'clear-night', 
    '02d': 'partly-cloudy-day', 
    '02n': 'partly-cloudy-day', 
    '03d': 'cloudy',
    '03n': 'cloudy',
    '04d': 'cloudy',
    '04n': 'cloudy',
    '09d': 'rain', 
    '09n': 'rain',
    '10d': 'rain', 
    '10n': 'rain',
    '11d': 'thunderstorm', 
    '11n': 'thunderstorm',
    '13d': 'snow',
    '13n': 'snow',
    '50d': 'mist', 
    '50n': 'mist',
  };
  
  export const getLottieIcon = (weatherCode: string): string => {
    return weatherToLottieMap[weatherCode] || 'cloudy';
  };
  