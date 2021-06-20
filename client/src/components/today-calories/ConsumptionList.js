import React from 'react';

import 'src/styles/TodayCalories.scss';

const ConsumptionList = () => {
  return (
    <div className="list-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="main-heading">Consumption List</div>
            <div className="table-list">
              <table>
                <thead>
                  <tr>
                    <th>Food</th>
                    <th>Quantity</th>
                    <th>Calories</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
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
                        <div className="qtyminus">-</div>
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={1}
                          className="qty"
                        />
                        <div className="qtyplus">+</div>
                      </form>
                    </td>
                    <td className="food-count">
                      <form action="#" className="count-inlineflex">
                        <div className="qtyminus">-</div>
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={1}
                          className="qty"
                        />
                        <div className="qtyplus">+</div>
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
                </tbody>
              </table>
            </div>
            {/* /.table-list */}
          </div>
          {/* /.col-lg-8 */}
          <div className="col-lg-4">
            <div className="list-totals">
              <h3>Calories needed to</h3>
              <form action="#" method="get" acceptCharset="utf-8">
                <table>
                  <tbody>
                    <tr>
                      <td>0.5 kg/week loss</td>
                      <td className="subtotal">2500</td>
                    </tr>
                    <tr>
                      <td>1 kg/week loss</td>
                      <td className="subtotal">2500</td>
                    </tr>
                    <tr className="border-top border-secondary">
                      <td>0.5 kg/week gain</td>
                      <td className="subtotal">2500</td>
                    </tr>
                    <tr>
                      <td>1 kg/week gain</td>
                      <td className="subtotal">2500</td>
                    </tr>
                    <tr className="total-row border-top border-secondary">
                      <td>{"Today's calories"}</td>
                      <td className="price-total">2500</td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn-list-totals">
                  <a href="#" className="update round-black-btn" title>
                    Clear list
                  </a>
                </div>
                {/* /.btn-list-totals */}
              </form>
              {/* /form */}
            </div>
            {/* /.list-totals */}
          </div>
          {/* /.col-lg-4 */}
        </div>
      </div>
    </div>
  );
};

export default ConsumptionList;
