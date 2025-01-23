import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from '../../../../shared/context/WeatherContext';
import { Favorites } from '../Favorites';
import { WeatherData, FavoriteCity } from '../../../../shared/types/weather';
import { describe, expect, test } from 'vitest';

const mockCity: FavoriteCity = {
  name: 'Madrid',
  country: 'ES',
  lat: 40.4165,
  lon: -3.7026
};

const mockWeatherData: WeatherData = {
  location: {
    city: 'Madrid',
    country: 'ES',
    lat: 40.4165,
    long: -3.7026,
    woeid: 766273,
    timezone_id: 'Europe/Madrid'
  },
  current_observation: {
    pubDate: 1647789600,
    wind: { chill: 15, direction: 'NE', speed: 11 },
    atmosphere: { humidity: 72, visibility: 10, pressure: 1015 },
    astronomy: { sunrise: '7:31 AM', sunset: '8:01 PM' },
    condition: { temperature: 18, text: 'Sunny', code: 32 }
  },
  forecasts: []
};

describe('Favorites Component', () => {
  test('renders favorite city card with weather data', () => {
    render(
      <BrowserRouter>
        <WeatherProvider>
          <Favorites city={mockCity} cityWeather={mockWeatherData} />
        </WeatherProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Madrid, ES')).toBeInTheDocument();
    expect(screen.getByText('18°C')).toBeInTheDocument();
    expect(screen.getByText(/soleado/i)).toBeInTheDocument();
  });
}); 