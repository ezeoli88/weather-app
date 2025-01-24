import { Route } from 'react-router-dom';
import { LazyDetailsPage, LazyFavoritesPage, LazyHomePage } from '../LazyRoutes/LazyModulesRoute';
import { ProtectedRouteComponent } from '../ProtectedRouteComponent';
import Layout from '../../shared/components/Layout';

export const ProtectedRoutes = () => {
    return (
        <Layout>
            <ProtectedRouteComponent>
                <Route path="/" element={<LazyHomePage />} />
                <Route path="/favorites" element={<LazyFavoritesPage />} />
                <Route path="/details/:city" element={<LazyDetailsPage />} />
            </ProtectedRouteComponent>
        </Layout>
    );
};
