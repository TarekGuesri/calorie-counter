import React from 'react';
import PropTypes from 'prop-types';

import FoodItem from './FoodItem';

const FoodListItems = ({ foods, handleOpenEdit }) => {
  return (
    <>
      {foods.length < 1 ? (
        <tr className="p-5">
          <td colSpan="5" style={{ border: 0, padding: '40px' }}>
            You have no foods added yet
          </td>
        </tr>
      ) : (
        foods.map((food) => (
          <FoodItem
            key={food._id}
            food={food}
            handleOpenEdit={handleOpenEdit}
          />
        ))
      )}
    </>
  );
};

FoodListItems.propTypes = {
  foods: PropTypes.array.isRequired,
  handleOpenEdit: PropTypes.func.isRequired,
};

export default FoodListItems;
