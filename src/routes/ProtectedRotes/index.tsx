import { Route } from 'react-router-dom';
import { LazyDetailsPage, LazyFavoritesPage, LazyHomePage } from '../LazyRoutes/LazyModulesRoute';
import { ProtectedRouteComponent } from '../ProtectedRouteComponent';
import Layout from '../../shared/components/Layout';
import { SuspenseWrap } from '../../shared/components/SuspenseWrap';

export const ProtectedRoutes = () => {
    return (
        <Layout>
            <ProtectedRouteComponent>
                <Route
                    path="/"
                    element={
                        <SuspenseWrap>
                            <LazyHomePage />
                        </SuspenseWrap>
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <SuspenseWrap>
                            <LazyFavoritesPage />
                        </SuspenseWrap>
                    }
                />
                <Route
                    path="/details/:city"
                    element={
                        <SuspenseWrap>
                            <LazyDetailsPage />
                        </SuspenseWrap>
                    }
                />
            </ProtectedRouteComponent>
        </Layout>
    );
};
