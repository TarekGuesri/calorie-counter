import React from 'react';
import { Helmet } from 'react-helmet-async';

import { WEBSITE_NAME } from 'src/utils/brand';
import ActivityDescription from 'src/components/activities/ActivityDescription';
import ActivityChart from 'src/components/activities/ActivityChart';

const Activities = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Activities`}</title>
      </Helmet>
      <h3 className="primary-text"> {'Activities'}</h3>
      <ActivityDescription />
      <ActivityChart />
    </>
  );
};

export default Activities;
