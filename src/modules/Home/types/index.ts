import { WeatherData } from '../../../shared/types/weather';

export interface ChipsProps {
    recentSearches: WeatherData['location'][];
    setSearchQuery: (city: string) => void;
    onSearch: (city: string) => void;
    currentCity?: string;
}
