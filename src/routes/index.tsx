import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider, useAuth } from '../shared/context/AuthContext';
import { WeatherProvider } from '../shared/context/WeatherContext';
import theme from '../config/theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoutes } from './ProtectedRotes';
import { PublicRoutes } from './PublicRoutes';

export const RoutesApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <WeatherProvider>
                    <Router>
                        <Routes>
                            <Route path="/*" element={<ProtectedRoutes />} />
                            <Route path="/portal/*" element={<PublicRoutes />} />

                            <Route path="*" element={<Navigate to="/login" replace />} />
                        </Routes>
                    </Router>
                </WeatherProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};
