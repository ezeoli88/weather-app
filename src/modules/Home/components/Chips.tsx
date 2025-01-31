import { Box, Typography, Chip } from '@mui/material';

import { History } from 'lucide-react';
import { ChipsProps } from '../types';
import { memo } from 'react';

export const Chips = memo(function MemoizedChips({
    recentSearches,
    setSearchQuery,
    onSearch,
    currentCity,
}: ChipsProps) {
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
                        variant={currentCity === location.city ? 'filled' : 'outlined'}
                        color={currentCity === location.city ? 'primary' : 'default'}
                        size="small"
                    />
                ))}
            </Box>
        </Box>
    );
});
