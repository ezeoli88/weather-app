import { Button, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { CardContent } from "@mui/material"
import { Card } from "@mui/material"
import { ArrowRight, Heart } from "lucide-react"
import { translateWeatherCondition } from "../../../shared/utils/temperature"
import { useWeather } from "../../../shared/context/WeatherContext"
import { FavoriteCity } from "../../../shared/types/weather"
import { WeatherData } from "../../../shared/types/weather"
import { useNavigate } from "react-router-dom"

export const Favorites = ({ city, cityWeather }: { city: FavoriteCity, cityWeather: WeatherData }) => {
  const { removeFavorite } = useWeather();
  const navigate = useNavigate();
  return (
    <>
            <Card sx={{ 
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <CardContent sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                p: 3
              }}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, gap: 2 }}>
                    <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
                      {cityWeather.location.city}, {cityWeather.location.country}
                    </Typography>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => removeFavorite(city.name)}
                      startIcon={<Heart />}
                    >
                      Quitar
                    </Button>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, my: 2 }}>
                    <img
                      style={{ width: 'auto', height: 48 }}
                      src={`https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/${cityWeather.current_observation.condition.code}d.png`}
                      alt={translateWeatherCondition(cityWeather.current_observation.condition.text)}
                    />
                    <Typography variant="h5">
                      {cityWeather.current_observation.condition.temperature}°C
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {translateWeatherCondition(cityWeather.current_observation.condition.text)}
                  </Typography>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => navigate(`/details/${city.name}`)}
                    endIcon={<ArrowRight />}
                  >
                    Ver detalles
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </>
  )
}
