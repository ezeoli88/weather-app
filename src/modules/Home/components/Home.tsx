import { Button, styled } from "@mui/material"
import { Box, CardContent } from "@mui/material"
import { Heart } from "lucide-react"
import { Card } from "@mui/material"
import { HeartOff } from "lucide-react"
import { Typography } from "@mui/material"
import { translateWeatherCondition } from "../../../shared/utils/temperature"
import { WeatherData } from "../../../shared/types/weather"

const WeatherIcon = styled('img')({
    width: 'auto',
    height: 64,
  });
  
  const WeatherInfoBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(4),
    marginTop: theme.spacing(2),
  }));

export const Home = ({ weatherData, navigate, isFavorite, handleFavoriteToggle }: { weatherData: WeatherData, navigate: (path: string) => void, isFavorite: boolean, handleFavoriteToggle: () => void }) => {
    return (
        <Card sx={{ 
            textAlign: 'center',
            minHeight: 400,
            display: 'flex',
            flexDirection: 'column',
            p: 3
          }}>
            <CardContent sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              height: '100%',
              p: 0
            }}>
              <Typography variant="h5" gutterBottom>
                {weatherData.location.city}, {weatherData.location.country}
              </Typography>
  
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <WeatherIcon
                  src={`https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/${weatherData.current_observation.condition.code}d.png`}
                  alt={translateWeatherCondition(weatherData.current_observation.condition.text)}
                />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom>
                    {weatherData.current_observation.condition.temperature}°C
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {translateWeatherCondition(weatherData.current_observation.condition.text)}
                  </Typography>
                </Box>
              </Box>
  
              <WeatherInfoBox>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Humedad
                  </Typography>
                  <Typography variant="body1">
                    {weatherData.current_observation.atmosphere.humidity}%
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Velocidad del viento
                  </Typography>
                  <Typography variant="body1">
                    {weatherData.current_observation.wind.speed} m/s
                  </Typography>
                </Box>
              </WeatherInfoBox>
  
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/details/${weatherData.location.city}`)}
                >
                  Ver detalles
                </Button>
                <Button
                  onClick={handleFavoriteToggle}
                  startIcon={isFavorite ? <HeartOff /> : <Heart />}
                  color={isFavorite ? 'secondary' : 'primary'}
                  variant="contained"
                >
                  {isFavorite ? 'Quitar' : 'Agregar a Favoritos'}
                </Button>
              </Box>
            </CardContent>
          </Card>
    )
}