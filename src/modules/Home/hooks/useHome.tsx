import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeather } from "../../../shared/context/WeatherContext";
import { searchCity } from "../services/api";


export const useHome = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const {
      weatherData,
      setWeatherData,
      loading,
      setLoading,
      error,
      setError,
      favorites,
      addFavorite,
      removeFavorite,
    } = useWeather();
  
    const handleSearch = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!searchQuery.trim()) return;
  
      setLoading(true);
      setError(null);
  
      try {
        const data = await searchCity(searchQuery);
        setWeatherData(data);
      } catch (err) {
        console.error(err);
        setError(`Hubo un error al obtener los datos del clima para la ciudad ${searchQuery.toLocaleUpperCase()}. Intente nuevamente más tarde.`);
      } finally {
        setLoading(false);
      }
    };
  
    const isFavorite = weatherData
      ? favorites.some((city) => city.name === weatherData.location.city)
      : false;
  
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
        searchQuery,
        setSearchQuery,
        navigate,
        weatherData,
        loading,
        error,
        isFavorite,
        handleFavoriteToggle,
        handleSearch,
    }
}