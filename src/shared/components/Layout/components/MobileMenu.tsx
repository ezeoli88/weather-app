import { MenuItem } from '@mui/material';
import { Menu } from '@mui/material';
import { IconButton } from '@mui/material';
import { MenuIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MobileMenuProps } from '../types/types';

export const MobileMenu = ({ menuItems, anchorEl, handleMenu, handleClose }: MobileMenuProps) => {
    const navigate = useNavigate();
    return (
        <>
            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                {menuItems.map((item) => (
                    <MenuItem
                        key={item.label}
                        onClick={() => {
                            if (item.onClick) {
                                item.onClick();
                            } else {
                                navigate(item.path);
                                handleClose();
                            }
                        }}
                        sx={{ gap: 1 }}>
                        {item.icon}
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
