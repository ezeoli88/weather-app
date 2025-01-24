import { useDetails } from '../hooks/useDetails';
import { Loading } from '../../../shared/components/Loading';
import { ErrorOrNoData } from './ErrorOrNoData';
import { Details } from './Details';

const DetailsPage = () => {

  const { weatherData, currentWeather, isFavorite, loading, error, handleFavoriteToggle } = useDetails();

  if (loading) return <Loading />

  if (error || !weatherData) return <ErrorOrNoData error={error || 'Weather data not available'} />

  return <Details weatherData={weatherData} currentWeather={currentWeather} isFavorite={isFavorite} handleFavoriteToggle={handleFavoriteToggle} />;
};

export default DetailsPage;