import { Button, Box, styled, CircularProgress } from '@mui/material';
import { Search } from 'lucide-react';
import { Loading } from '../../../shared/components/Loading';
import { Error } from '../../../shared/components/Error';
import { Home } from './Home';
import { useHome } from '../hooks/useHome';
import { SearchInput } from './SearchInput';
import { useWeather } from '../../../shared/context/WeatherContext';
import { Chips } from './Chips';

const SearchForm = styled('form')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(4),
}));

const HomePage = () => {
    const {
        searchQuery,
        handleSetSearchQuery,
        navigate,
        weatherData,
        loading,
        error,
        isFavorite,
        handleFavoriteToggle,
        handleSearch,
        handleChipSearch,
    } = useHome();
    const { recentSearches } = useWeather();

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <SearchForm onSubmit={handleSearch}>
                <SearchInput
                    value={searchQuery}
                    onChange={handleSetSearchQuery}
                    disabled={loading}
                />
                <Button
                    type="submit"
                    variant="contained"
                    disabled={loading || !searchQuery}
                    startIcon={loading ? <CircularProgress size={20} /> : <Search />}>
                    Buscar
                </Button>
            </SearchForm>

            {recentSearches.length > 0 && (
                <Chips
                    recentSearches={recentSearches}
                    setSearchQuery={handleSetSearchQuery}
                    onSearch={handleChipSearch}
                    currentCity={weatherData?.location.city}
                />
            )}

            {error && <Error error={error} />}

            {loading && <Loading />}

            {weatherData && !loading && !error && (
                <Home
                    weatherData={weatherData}
                    navigate={navigate}
                    isFavorite={isFavorite}
                    handleFavoriteToggle={handleFavoriteToggle}
                />
            )}
        </Box>
    );
};

export default HomePage;
