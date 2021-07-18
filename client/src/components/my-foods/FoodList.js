import React from 'react';
import PropTypes from 'prop-types';

import 'src/styles/TodayCalories.scss';
import Spinner from 'src/components/layout/Spinner';
import FoodListItems from './FoodListItems';

const FoodList = ({ foods, loading, handleOpenEdit, handleOpenDelete }) => {
  return (
    <div className="table-responsive mt-2">
      <table className="table table-image">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Food</th>
            <th scope="col">Calories (Per portion)</th>
            <th scope="col" colSpan="2">
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="text-success">
              <td colSpan="5" style={{ border: 0, padding: '40px' }}>
                <Spinner />
              </td>
            </tr>
          ) : (
            <FoodListItems
              foods={foods}
              handleOpenEdit={handleOpenEdit}
              handleOpenDelete={handleOpenDelete}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

FoodList.propTypes = {
  foods: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handleOpenEdit: PropTypes.func.isRequired,
  handleOpenDelete: PropTypes.func.isRequired,
};

export default FoodList;
