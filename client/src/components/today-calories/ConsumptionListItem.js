import React from 'react';

const ConsumptionListItem = () => {
  return (
    <tr>
      <td>
        <div className="display-flex align-center">
          <div className="img-food">
            <img
              src="https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg"
              alt=""
              className="mCS_img_loaded"
            />
          </div>
          <div className="name-food">Pizza</div>
          <div className="price">1220</div>
        </div>
      </td>
      <td className="food-count">
        <form action="#" className="count-inlineflex">
          <div className="qtystart" />
          <input type="text" name="quantity" defaultValue={1} className="qty" />
          <div className="qtyend" />
        </form>
      </td>
      <td className="food-count">
        <form action="#" className="count-inlineflex">
          <div className="qtystart" />
          <input type="text" name="quantity" defaultValue={1} className="qty" />
          <div className="qtyend" />
        </form>
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

export default ConsumptionListItem;
