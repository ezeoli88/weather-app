import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { LazyLoginPage } from '../LazyRoutes/LazyModulesRoute';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LazyLoginPage />} />
        </Routes>
    );
};
