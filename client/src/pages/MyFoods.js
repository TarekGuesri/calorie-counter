import React from 'react';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';
import FoodList from 'src/components/my-foods/FoodList';
import AddFood from 'src/components/my-foods/AddFood';
import 'src/styles/MyFoods.scss';

const MyFoods = () => {
  return (
    <>
      {' '}
      <Helmet>
        <title>{`${WEBSITE_NAME} - My Foods`}</title>
      </Helmet>
      <h3 className="primary-text"> {'My Foods'}</h3>
      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          {' '}
          <button
            className="primary-button  btn-lg rounded-pill mt-4 mb-2 ms-0 ms-sm-4"
            style={{
              padding: '.320rem 1.75rem',
            }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#addFood"
            // disabled={!food.id}
            // onClick={handleAddToList}
          >
            Add
          </button>
        </div>
      </div>
      <FoodList />
      <AddFood />
    </>
  );
};

export default MyFoods;
