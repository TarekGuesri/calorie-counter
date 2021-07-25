import React from 'react';
import { Helmet } from 'react-helmet-async';

import { WEBSITE_NAME } from 'src/utils/brand';
import Hero from 'src/components/home/Hero';
import Features from 'src/components/home/Features';
import 'src/styles/Home.scss';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{WEBSITE_NAME}</title>
      </Helmet>
      <Hero />
      <Features />
    </>
  );
};

export default Home;
