import { useState } from "react";
import { useWeather } from "../../../shared/context/WeatherContext";
import { useEffect } from "react";
import { WeatherData } from "../../../shared/types/weather";

export const useFavorites = () => {
    const { favorites } = useWeather();
    const [weatherData, setWeatherData] = useState<Record<string, WeatherData>>({});
  
    const loadCachedWeatherData = () => {
      const cachedData: Record<string, WeatherData> = {};
      
      favorites.forEach((city) => {
        const data = localStorage.getItem(`weatherData-${city.name}`);
        if (data) {
          cachedData[city.name] = JSON.parse(data);
        }
      });
  
      setWeatherData(cachedData);
    };
  
    useEffect(() => {
      loadCachedWeatherData();
    }, [favorites]);

    return { weatherData, favorites };
}