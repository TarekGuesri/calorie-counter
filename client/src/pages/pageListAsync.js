import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));

export const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);
export const LoginPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Login />
  </Suspense>
);
export const RegisterPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Register />
  </Suspense>
);
