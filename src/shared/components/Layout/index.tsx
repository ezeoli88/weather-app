import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Cloud } from 'lucide-react';
import { useLayout } from './hook/useLayout';
import { MobileMenu } from './components/MobileMenu';
import { DesktopMenu } from './components/DesktopMenu';
import { Footer, MainContent } from './components/styledComponents';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { isMobile, menuItems, anchorEl, handleMenu, handleClose, handleLogout } = useLayout();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Cloud style={{ marginRight: '12px' }} />
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Weather Forecast
                    </Typography>

                    {isMobile ? (
                        <MobileMenu
                            menuItems={menuItems}
                            anchorEl={anchorEl}
                            handleMenu={handleMenu}
                            handleClose={handleClose}
                        />
                    ) : (
                        <DesktopMenu handleLogout={handleLogout} />
                    )}
                </Toolbar>
            </AppBar>
            <MainContent>{children}</MainContent>
            <Footer>
                <Container maxWidth="sm">
                    <Typography variant="body2" color="text.secondary" align="center">
                        © {new Date().getFullYear()} Weather Forecast App
                    </Typography>
                </Container>
            </Footer>
        </Box>
    );
};

export default Layout;
