import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { WeatherProvider } from '../../../../shared/context/WeatherContext';
import { AuthProvider } from '../../../../shared/context/AuthContext';
import { Home } from '../Home';
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

const mockProps = {
  weatherData: mockWeatherData,
  navigate: vi.fn(),
  isFavorite: false,
  handleFavoriteToggle: vi.fn()
};

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <WeatherProvider>
          {component}
        </WeatherProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('Home Component', () => {
  test('renders button', () => {
    renderWithProviders(<Home {...mockProps} />);
    
    expect(screen.getByRole('button', { name: 'Agregar a Favoritos' })).toBeInTheDocument();
  });

  test('test button details', () => {
    renderWithProviders(<Home {...mockProps} />);
    
    const button = screen.getByRole('button', { name: 'Ver detalles' });
    fireEvent.click(button);
    expect(mockProps.navigate).toHaveBeenCalledWith('/details/Madrid');
  });

  test('test button favorite', () => {
    renderWithProviders(<Home {...mockProps} />);
    
    const button = screen.getByRole('button', { name: 'Agregar a Favoritos' });
    fireEvent.click(button);
    expect(mockProps.handleFavoriteToggle).toHaveBeenCalled();
  });
}); 