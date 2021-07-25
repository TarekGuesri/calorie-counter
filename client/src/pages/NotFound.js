import React from 'react';
import { Helmet } from 'react-helmet-async';

import { WEBSITE_NAME } from 'src/utils/brand';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Not Found`}</title>
      </Helmet>
      <h1>Page not found</h1>
    </>
  );
};

export default NotFound;
