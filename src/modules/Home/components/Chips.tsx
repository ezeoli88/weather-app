import { Box, Typography } from "@mui/material"

import { Chip } from "@mui/material"
import { History } from "lucide-react"
import { WeatherData } from "../../../shared/types/weather"

interface ChipsProps {
  recentSearches: WeatherData['location'][];
  setSearchQuery: (city: string) => void;
  onSearch: (city: string) => void;
  currentCity?: string;
}

export const Chips = ({ recentSearches, setSearchQuery, onSearch, currentCity }: ChipsProps) => {
  const handleChipClick = (city: string) => {
    setSearchQuery(city);
    onSearch(city);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
        <History size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} />
        Búsquedas recientes
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {recentSearches.map((location) => (
          <Chip
            key={location.city}
            label={`${location.city}, ${location.country}`}
            onClick={() => handleChipClick(location.city)}
            variant={currentCity === location.city ? "filled" : "outlined"}
            color={currentCity === location.city ? "primary" : "default"}
            size="small"
          />
        ))}
      </Box>
    </Box>
  );
};