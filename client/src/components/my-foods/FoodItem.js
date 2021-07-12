import React from 'react';

const FoodItem = () => {
  return (
    <tr>
      <td>
        <img
          src="https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg"
          className="img-fluid food-img"
          alt="Food"
        />
      </td>
      <td>Yogurt (frozen, low fat) (1 cup)</td>
      <td>250</td>

      <td className="ps-3 ps-md-0">
        <a href="#" className="text-danger me-3">
          <i className="fas fa-trash-alt"></i>
        </a>
        <a href="#" className="text-danger">
          <i className="fas fa-trash-alt"></i>
        </a>
      </td>
    </tr>
  );
};

export default FoodItem;
