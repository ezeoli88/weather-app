import { WeatherData } from "../types/weather";

export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return Math.round((fahrenheit - 32) * 5 / 9);
}; 

export const translateWeatherCondition = (condition: string): string => {
  const translations: { [key: string]: string } = {
    'clear': 'despejado',
    'sunny': 'soleado',
    'mostly sunny': 'mayormente soleado',
    'partly cloudy': 'parcialmente nublado',
    'mostly cloudy': 'mayormente nublado',
    'cloudy': 'nublado',
    'overcast': 'cubierto',
    'rain': 'lluvia',
    'light rain': 'lluvia ligera',
    'heavy rain': 'lluvia fuerte',
    'showers': 'chubascos',
    'thunderstorm': 'tormenta',
    'snow': 'nieve',
    'mist': 'neblina',
    'fog': 'niebla',
    'drizzle': 'llovizna',
    'storm': 'tormenta',
    'windy': 'ventoso'
  };

  const lowerCondition = condition.toLowerCase();
  return translations[lowerCondition] || condition;
};

export const filterTodayWeather = (weatherData: WeatherData): WeatherData => {
  const today = new Date().setHours(0, 0, 0, 0);
  
  return {
    ...weatherData,
    forecasts: weatherData.forecasts.filter(forecast => {
      const forecastDate = new Date(forecast.date * 1000).setHours(0, 0, 0, 0);
      return forecastDate >= today;
    })
  };
};
