import React from 'react';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';
import ConsumptionList from 'src/components/today-calories/ConsumptionList';

const TodayCalories = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Today's Calories`}</title>
      </Helmet>
      <h3> {"Today's Calories"}</h3>
      <ConsumptionList />
    </>
  );
};

export default TodayCalories;
