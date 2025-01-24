import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { LazyLoginPage } from '../LazyRoutes/LazyModulesRoute';
import { SuspenseWrap } from '../../shared/components/SuspenseWrap';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <SuspenseWrap>
                        <LazyLoginPage />
                    </SuspenseWrap>
                }
            />
        </Routes>
    );
};
