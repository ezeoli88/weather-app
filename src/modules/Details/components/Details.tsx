import { Box, Typography, CardContent, Card, Grid, Button, CardMedia } from "@mui/material"
import { translateWeatherCondition } from "../../../shared/utils/temperature"
import { Heart } from "lucide-react"
import { HeartOff } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { DetailsProps, Forecast } from "../../../shared/types/weather"
import { useNavigate } from "react-router-dom"

export const Details = ({
    weatherData,
    currentWeather,
    isFavorite,
    handleFavoriteToggle,
}: DetailsProps) => {
    const navigate = useNavigate();
    return (
        <Box>
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Button
            startIcon={<ArrowLeft />}
            onClick={() => navigate(-1)}
          >
            Volver
          </Button>
          <Button
            onClick={handleFavoriteToggle}
            startIcon={isFavorite ? <HeartOff /> : <Heart />}
            color={isFavorite ? 'secondary' : 'primary'}
          >
            {isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
          </Button>
        </Box>
  
        <Card sx={{ mb: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ bgcolor: 'primary.light', color: 'primary.contrastText', py: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={4}>
                <Typography variant="body2">
                  Presión
                </Typography>
                <Typography variant="h6">
                  {currentWeather.atmosphere.pressure} mb
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2">
                  Visibilidad
                </Typography>
                <Typography variant="h6">
                  {currentWeather.atmosphere.visibility} km
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2">
                  Dirección del viento
                </Typography>
                <Typography variant="h6">
                  {currentWeather.wind.direction}°
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              height: 200,
              objectFit: 'contain',
              p: 2,
              margin: '0 auto'
            }}
            image={`https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/${currentWeather.condition.code}d.png`}
            alt={translateWeatherCondition(currentWeather.condition.text)}
          />
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h4" gutterBottom>
              {weatherData.location.city}, {weatherData.location.country}
            </Typography>
  
            <Box display="flex" alignItems="center" justifyContent="center" gap={3} my={3}>
              <Box>
                <Typography variant="h2">
                  {currentWeather.condition.temperature}°C
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {translateWeatherCondition(currentWeather.condition.text)}
                </Typography>
              </Box>
            </Box>
  
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={6} sm={3}>
                <Typography variant="body2" color="text.secondary">
                  Humedad
                </Typography>
                <Typography variant="h6">
                  {currentWeather.atmosphere.humidity}%
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="body2" color="text.secondary">
                  Velocidad del viento
                </Typography>
                <Typography variant="h6">
                  {currentWeather.wind.speed} m/s
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
  
        <Typography variant="h5" gutterBottom align="center">
          Pronóstico de 5 días
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {weatherData?.forecasts.slice(0, 5).map((forecast: Forecast) => (
            <Grid item xs={12} sm={6} md={2.4} key={forecast.date}>
              <Card sx={{ 
                textAlign: 'center', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: 140,
                    objectFit: 'contain',
                    p: 2,
                    margin: '0 auto'
                  }}
                  image={`https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/${forecast.code}d.png`}
                  alt={forecast.text}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {new Date(forecast.date * 1000).toLocaleDateString('es-ES', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </Typography>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
                      {translateWeatherCondition(forecast.text)}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 1 }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Máx
                        </Typography>
                        <Typography>
                          {forecast.high}°C
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Mín
                        </Typography>
                        <Typography>
                          {forecast.low}°C
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}