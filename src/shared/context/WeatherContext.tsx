import React, { createContext, useContext, useState, useEffect } from 'react';
import { WeatherData, FavoriteCity, WeatherContextType } from '../types/weather';


const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteCity[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [recentSearches, setRecentSearches] = useState<WeatherData['location'][]>(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  // Persistir favoritos
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Persistir última búsqueda
  useEffect(() => {
    if (weatherData) {
      localStorage.setItem('lastSearch', JSON.stringify(weatherData));
    }
  }, [weatherData]);

  // Persistir búsquedas recientes
  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const addFavorite = (city: FavoriteCity) => {
    if (!favorites.some(fav => fav.name === city.name)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (cityName: string) => {
    setFavorites(favorites.filter(city => city.name !== cityName));
  };

  const addRecentSearch = (location: WeatherData['location']) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.city !== location.city);
      return [location, ...filtered].slice(0, 5); // Mantener solo las últimas 5 búsquedas
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        weatherData,
        setWeatherData,
        loading,
        setLoading,
        error,
        setError,
        recentSearches,
        addRecentSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};