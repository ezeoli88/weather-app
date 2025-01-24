import { Heart, Home } from 'lucide-react';

import { LogOut } from 'lucide-react';
import { MobileMenuItem } from '../types/types';
import { useAuth } from '../../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export const useLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        navigate('/portal/login');
        handleClose();
    };

    const menuItems: MobileMenuItem[] = [
        {
            label: 'Home',
            icon: <Home size={16} />,
            path: '/',
            onClick: () => {
                navigate('/');
                handleClose();
            },
        },
        {
            label: 'Favoritos',
            icon: <Heart size={16} />,
            path: '/favorites',
            onClick: () => {
                navigate('/favorites');
                handleClose();
            },
        },
        {
            label: 'Salir',
            icon: <LogOut size={16} />,
            path: '/logout',
            onClick: handleLogout,
        },
    ];

    return {
        menuItems,
        isMobile,
        anchorEl,
        handleMenu,
        handleClose,
        handleLogout,
    };
};
