import React from 'react';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';
import TipsDescription from 'src/components/tips/TipsDescription';
import TipList from 'src/components/tips/TipList';

const Tips = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Tips`}</title>
      </Helmet>
      <h3 className="primary-text"> {'Tips'}</h3>
      <TipsDescription />
      <TipList />
    </>
  );
};

export default Tips;
