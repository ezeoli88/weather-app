import {
  Grid
} from '@mui/material';
import { NoFavorites } from './NoFavorites';
import { NoDataForFavoriteCity } from './NoDataForFavoriteCity';
import { Favorites } from './Favorites';
import { useFavorites } from '../hooks/useFavorites';
import { FavoriteCity } from '../../../shared/types/weather';

const FavoritesPage = () => {

  const { favorites, weatherData } = useFavorites();

  if (favorites.length === 0) return <NoFavorites />  

  return (
    <Grid container spacing={3}>
      {favorites.map((city: FavoriteCity) => {
        const cityWeather = weatherData[city.name];
        
        if (!cityWeather) {
          return (
            <Grid item key={city.name} xs={12} sm={6} md={4}>
              <NoDataForFavoriteCity cityName={city.name} />
            </Grid>
          );
        }

        return (
          <Grid item key={city.name} xs={12} sm={6} md={4}>
            <Favorites city={city} cityWeather={cityWeather} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FavoritesPage;