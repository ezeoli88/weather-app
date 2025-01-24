import { Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../shared/context/AuthContext';

export const ProtectedRouteComponent = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Routes>{children}</Routes> : <Navigate to="/login" />;
};
