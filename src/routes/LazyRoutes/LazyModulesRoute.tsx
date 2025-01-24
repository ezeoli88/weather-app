import { lazy } from 'react';

// Home Page
export const LazyHomePage = lazy(() => import('../../modules/Home/components'));

// Details Page
export const LazyDetailsPage = lazy(() => import('../../modules/Details/components'));

// Favorites Page
export const LazyFavoritesPage = lazy(() => import('../../modules/Favorites/components'));

// Login Page
export const LazyLoginPage = lazy(() => import('../../modules/Login/components/Login'));

