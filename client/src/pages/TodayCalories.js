import React from 'react';
import { Helmet } from 'react-helmet-async';

import { WEBSITE_NAME } from 'src/utils/brand';
import ConsumptionList from 'src/components/today-calories/ConsumptionList';

const TodayCalories = () => {
  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Consumption List`}</title>
      </Helmet>
      <h3 className="primary-text"> {'Consumption List'}</h3>
      <ConsumptionList />
    </>
  );
};

export default TodayCalories;
