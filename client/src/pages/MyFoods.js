import React from 'react';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';
import FoodList from 'src/components/my-foods/FoodList';
import 'src/styles/MyFoods.scss';

const MyFoods = () => {
  return (
    <>
      {' '}
      <Helmet>
        <title>{`${WEBSITE_NAME} - My Foods`}</title>
      </Helmet>
      <h3 className="primary-text"> {'My Foods'}</h3>
      <FoodList />
    </>
  );
};

export default MyFoods;
