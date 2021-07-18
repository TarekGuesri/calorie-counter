import React from 'react';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';

const Tips = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Tips`}</title>
      </Helmet>
      <h3 className="primary-text"> {'Tips'}</h3>
    </>
  );
};

export default Tips;
