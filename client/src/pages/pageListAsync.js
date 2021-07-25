import React, { Suspense, lazy } from 'react';

import PageSpinner from 'src/components/layout/PageSpinner';

const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const Profile = lazy(() => import('./Profile'));
const TodayCalories = lazy(() => import('./TodayCalories'));
const MyFoods = lazy(() => import('./MyFoods'));
const Tips = lazy(() => import('./Tips'));
const Activities = lazy(() => import('./Activities'));
const Settings = lazy(() => import('./Settings'));
const NotFound = lazy(() => import('./NotFound'));

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
export const MyFoodsPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <MyFoods />
  </Suspense>
);
export const TipsPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <Tips />
  </Suspense>
);
export const ActivitiesPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <Activities />
  </Suspense>
);
export const SettingsPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <Settings />
  </Suspense>
);
export const NotFoundPage = () => (
  <Suspense fallback={<PageSpinner />}>
    <NotFound />
  </Suspense>
);
