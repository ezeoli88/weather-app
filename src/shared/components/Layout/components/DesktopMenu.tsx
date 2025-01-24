import { Button } from '@mui/material';
import { LogOut } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Home } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { DesktopMenuProps } from '../types/types';

export const DesktopMenu = ({ handleLogout }: DesktopMenuProps) => {
    return (
        <>
            <Button color="inherit" component={RouterLink} to="/" startIcon={<Home />}>
                Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/favorites" startIcon={<Heart />}>
                Favoritos
            </Button>
            <Button color="inherit" onClick={handleLogout} startIcon={<LogOut />} sx={{ ml: 2 }}>
                Salir
            </Button>
        </>
    );
};
