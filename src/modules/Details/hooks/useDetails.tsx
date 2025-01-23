import { useEffect } from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWeather } from "../../../shared/context/WeatherContext";
import { WeatherData } from "../../../shared/types/weather";

export const useDetails = () => {
    const { city } = useParams<{ city: string }>();
    const { favorites, addFavorite, removeFavorite } = useWeather();
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        if (!city) return;
  
        setLoading(true);
        setError(null);
  
        try {
          // Primero intentamos obtener datos del localStorage
          const cachedData = localStorage.getItem(`weatherData-${city}`);
          if (cachedData) {
            setWeatherData(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error('Error:', error);
          setError('Hubo un error al obtener los datos del clima. Intente nuevamente más tarde.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [city]);
  
    if (!weatherData) {
      return {
        weatherData: null,
        currentWeather: null,
        isFavorite: false,
        loading,
        error,
        handleFavoriteToggle: () => {},
      };
    }

    const currentWeather = weatherData.current_observation;
    const isFavorite = favorites.some((fav) => fav.name === weatherData.location.city);
  
    const handleFavoriteToggle = () => {
      if (!weatherData) return;
      
      if (isFavorite) {
        removeFavorite(weatherData.location.city);
      } else {
        addFavorite({
          name: weatherData.location.city,
          country: weatherData.location.country,
          lat: weatherData.location.lat,
          lon: weatherData.location.long,
        });
      }
    };

    return {
        weatherData,
        currentWeather,
        isFavorite,
        loading,
        error,
        handleFavoriteToggle,
    }
}