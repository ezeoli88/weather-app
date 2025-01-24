import { ThemeProvider } from "@mui/material/styles"
import { AuthProvider } from "../shared/context/AuthContext"
import { WeatherProvider } from "../shared/context/WeatherContext"
import { ProtectedRoute } from "./ProtectedRoute"
import DetailsPage from "../modules/Details/components/index"
import FavoritesPage from "../modules/Favorites/components"
import Home from "../modules/Home/components"
import { Login } from "../modules/Login/components/Login"
import theme from "../config/theme"
import { CssBaseline } from "@mui/material"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "../shared/components/Layout"


export const RoutesApp = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <WeatherProvider>
            <Router>
              <Routes>
                <Route path="/login" element={
                  <Login />
                } />
                <Route path="/" element={
                  <ProtectedRoute>
                    <Layout>
                      <Home />
                    </Layout>
                  </ProtectedRoute>
                } />
                <Route path="/favorites" element={
                  <ProtectedRoute>
                    <Layout>
                      <FavoritesPage />
                    </Layout>
                  </ProtectedRoute>
                } />
                <Route path="/details/:city" element={
                  <ProtectedRoute>
                    <Layout>
                      <DetailsPage />
                    </Layout>
                  </ProtectedRoute>
                } />
              </Routes>
            </Router>
          </WeatherProvider>
        </AuthProvider>
      </ThemeProvider>
    )
}