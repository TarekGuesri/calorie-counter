import React, { Suspense, lazy } from 'react';

import PageSpinner from 'src/components/layout/PageSpinner';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));

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
