import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  styled,
} from '@mui/material';
import { Cloud, Heart, Home, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  marginTop: 'auto',
}));

const MainContent = styled(Container)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
}));

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Cloud style={{ marginRight: '12px' }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Weather Forecast
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<Home />}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/favorites"
            startIcon={<Heart />}
          >
            Favoritos
          </Button>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogOut />}
            sx={{ ml: 2 }}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <MainContent>
        {children}
      </MainContent>
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