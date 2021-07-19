import React from 'react';
import PropTypes from 'prop-types';

const FoodItem = ({ food, handleOpenEdit, handleOpenDelete }) => {
  const { _id, name, caloriesPerPortion, image } = food;
  return (
    <tr>
      <td>
        <img
          src={
            image
              ? `${image}?${Date.now()}` // We use the date so we can force image re-render when user changes the image
              : 'images/default-food-picture.png'
          }
          className="img-fluid food-img"
          alt="Food Image"
        />
      </td>
      <td>{name}</td>
      <td>{caloriesPerPortion}</td>

      <td className="ps-3 ps-md-0">
        <a
          href="#"
          className="text-sucess p-3"
          data-id={_id}
          onClick={handleOpenEdit}
        >
          <i className="fas fa-pen action-icon"></i>
        </a>
        <a
          href="#"
          className="text-danger p-3"
          data-id={_id}
          onClick={handleOpenDelete}
        >
          <i className="fas fa-trash-alt action-icon"></i>
        </a>
      </td>
    </tr>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
  handleOpenEdit: PropTypes.func.isRequired,
  handleOpenDelete: PropTypes.func.isRequired,
};

export default FoodItem;
