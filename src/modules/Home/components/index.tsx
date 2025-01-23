import {
  Button,
  Box,
  styled,
  CircularProgress,
} from '@mui/material';
import { Search } from 'lucide-react';
import { Loading } from '../../../shared/components/Loading';
import { Error } from '../../../shared/components/Error';
import { Home } from './Home';
import { useHome } from '../hooks/useHome';
import { SearchInput } from './SearchInput';

const SearchForm = styled('form')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
}));

const HomePage = () => {

  const { searchQuery, setSearchQuery, navigate, weatherData, loading, error, isFavorite, handleFavoriteToggle, handleSearch } = useHome();

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          startIcon={ loading ? <CircularProgress size={20} /> : <Search />}
        >
          Buscar
        </Button>
      </SearchForm>

      {error && <Error error={error} />}

      {loading && <Loading />}

      {weatherData && !loading && !error && (
        <Home weatherData={weatherData} navigate={navigate} isFavorite={isFavorite} handleFavoriteToggle={handleFavoriteToggle} />
      )}
    </Box>
  );
};

export default HomePage;