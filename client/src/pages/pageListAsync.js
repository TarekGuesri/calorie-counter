import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));

export const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);
