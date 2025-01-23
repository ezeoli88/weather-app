import { Navigate } from "react-router-dom";
import { useAuth } from "../shared/context/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
  };