import axios from 'axios';
import { WeatherData } from '../../../shared/types/weather';
import { filterTodayWeather } from '../../../shared/utils/temperature';

const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
const API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const weatherApi = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST,
  },
});

export const searchCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await weatherApi.get<WeatherData>(`/weather`, {
      params: {
        location: city,
        format: 'json',
        u: 'c',
        lang: 'es',
      },
    });
    
    const filteredData = filterTodayWeather(response.data);
    localStorage.setItem(`weatherData-${city}`, JSON.stringify(filteredData));
    return filteredData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
};
