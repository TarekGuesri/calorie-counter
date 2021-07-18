import React from 'react';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';

const Activities = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Activities`}</title>
      </Helmet>
      <h3 className="primary-text"> {'Activities'}</h3>
    </>
  );
};

export default Activities;
