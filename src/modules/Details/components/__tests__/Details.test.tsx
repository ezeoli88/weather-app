import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from '../../../../shared/context/WeatherContext';
import { Details } from '../Details';
import { describe, expect, test, vi } from 'vitest';
import { WeatherData } from '../../../../shared/types/weather';

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

describe('Details Component', () => {
  const mockProps = {
    weatherData: mockWeatherData,
    currentWeather: mockWeatherData.current_observation,
    isFavorite: false,
    handleFavoriteToggle: vi.fn()
  };

  test('renders weather details', () => {
    render(
      <BrowserRouter>
        <WeatherProvider>
          <Details {...mockProps} />
        </WeatherProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/madrid/i)).toBeInTheDocument();
  });
}); 