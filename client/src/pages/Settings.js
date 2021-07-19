import React from 'react';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Settings`}</title>
      </Helmet>
      <h3 className="primary-text"> {'Settings'}</h3>
    </>
  );
};

export default Settings;
