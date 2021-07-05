import React from 'react';
import PropTypes from 'prop-types';

import TextInput from 'src/components/forms/TextInput';

const ConsumptionListItem = ({
  consumption: { id, name, caloriesPerPortion, image, quantity, calories },
  updateConsumptionCalories,
  updateConsumptionQuantity,
  deleteConsumption,
}) => {
  return (
    <tr>
      <td>
        <div className="display-flex align-center">
          <div className="img-food">
            <img
              src={
                image ||
                'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg'
              }
              alt=""
              className="mCS_img_loaded"
            />
          </div>
          <div className="name-food">{name}</div>
          <div className="price">{caloriesPerPortion}</div>
        </div>
      </td>
      <td className="food-count px-2 px-md-0">
        <TextInput
          className="mx-auto"
          name="quantity"
          value={quantity}
          label="Quantity"
          type="number"
          min={0}
          onChange={(e) => updateConsumptionQuantity(id, e.target.value)}
          required
          style={{ width: '130px' }}
        />
      </td>
      <td className="food-count px-2 px-md-0">
        <TextInput
          className="mx-auto"
          name="calories"
          value={calories}
          label="Calories"
          type="number"
          min={0}
          onChange={(e) => updateConsumptionCalories(id, e.target.value)}
          required
          style={{ width: '130px' }}
        />
      </td>

      <td className="ps-3 ps-md-0">
        <a
          href="#"
          className="text-danger"
          onClick={() => deleteConsumption(id)}
        >
          <i className="fas fa-trash-alt"></i>
        </a>
      </td>
    </tr>
  );
};

ConsumptionListItem.propTypes = {
  consumption: PropTypes.object.isRequired,
  updateConsumptionQuantity: PropTypes.func.isRequired,
  updateConsumptionCalories: PropTypes.func.isRequired,
  deleteConsumption: PropTypes.func.isRequired,
};

export default ConsumptionListItem;
