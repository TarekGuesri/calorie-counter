import React from 'react';
import PropTypes from 'prop-types';

const FoodItem = ({ food, handleOpenEdit }) => {
  const { _id, name, caloriesPerPortion, image } = food;
  return (
    <tr>
      <td>
        <img
          src={
            image ||
            'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg'
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
        <a href="#" className="text-danger p-3" data-id={_id}>
          <i className="fas fa-trash-alt action-icon"></i>
        </a>
      </td>
    </tr>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
  handleOpenEdit: PropTypes.func.isRequired,
};

export default FoodItem;
