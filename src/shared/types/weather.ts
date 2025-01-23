export interface WeatherData {
  location: Location
  current_observation: CurrentObservation
  forecasts: Forecast[]
}

export interface Location {
  city: string
  woeid: number
  country: string
  lat: number
  long: number
  timezone_id: string
}

export interface CurrentObservation {
  pubDate: number
  wind: Wind
  atmosphere: Atmosphere
  astronomy: Astronomy
  condition: Condition
}

export interface Wind {
  chill: number
  direction: string
  speed: number
}

export interface Atmosphere {
  humidity: number
  visibility: number
  pressure: number
}

export interface Astronomy {
  sunrise: string
  sunset: string
}

export interface Condition {
  temperature: number
  text: string
  code: number
}

export interface Forecast {
  day: string
  date: number
  high: number
  low: number
  text: string
  code: number
}

export interface FavoriteCity {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface WeatherContextType {
  favorites: FavoriteCity[];
  addFavorite: (city: FavoriteCity) => void;
  removeFavorite: (cityName: string) => void;
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export type DetailsProps = {
  weatherData: WeatherData;
  currentWeather: CurrentObservation;
  isFavorite: boolean;
  handleFavoriteToggle: () => void;
}