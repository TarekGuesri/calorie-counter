import React, { Suspense, lazy } from 'react';

import PageSpinner from 'src/components/layout/PageSpinner';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const Profile = lazy(() => import('./Profile'));
const TodayCalories = lazy(() => import('./TodayCalories'));
const NotFound = lazy(() => import('./NotFound'));

export const HomePage = () => (
  <Suspense fallback={<PageSpinner />}>
    <Home />
  </Suspense>
);
export const LoginPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <Login />
  </Suspense>
);
export const RegisterPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <Register />
  </Suspense>
);
export const ProfilePage = () => (
  <Suspense fallback={<PageSpinner />}>
    <Profile />
  </Suspense>
);
export const TodayCaloriesPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <TodayCalories />
  </Suspense>
);
export const NotFoundPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <NotFound />
  </Suspense>
);
