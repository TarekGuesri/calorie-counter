import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TextInput from 'src/components/forms/TextInput';

const ConsumptionListItem = ({
  consumption: { name, caloriesPerPortion, image },
}) => {
  const [state, setState] = useState({
    quantity: 0,
    calories: 0,
  });

  useEffect(() => {
    setState({ ...state, quantity });
  }, []);

  const handleOnChange = async (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { quantity, calories } = state;

  return (
    <tr>
      <td>
        <div className="display-flex align-center">
          <div className="img-food">
            <img src={image} alt="" className="mCS_img_loaded" />
          </div>
          <div className="name-food">{name}</div>
          <div className="price">{caloriesPerPortion}</div>
        </div>
      </td>
      <td className="food-count">
        <TextInput
          className="mx-auto"
          name="quantity"
          value={quantity}
          label="Quantity"
          type="number"
          min={0}
          onChange={handleOnChange}
          required
          style={{ width: '130px' }}
        />
      </td>
      <td className="food-count">
        <TextInput
          className="mx-auto"
          name="calories"
          value={calories}
          label="Calories"
          type="number"
          min={0}
          onChange={handleOnChange}
          required
          style={{ width: '130px' }}
        />
      </td>

      <td>
        <a href="#" title>
          <img
            src="images/icons/delete.png"
            alt=""
            className="mCS_img_loaded"
          />
        </a>
      </td>
    </tr>
  );
};

ConsumptionListItem.propTypes = {
  consumption: PropTypes.object.isRequired,
};

export default ConsumptionListItem;
