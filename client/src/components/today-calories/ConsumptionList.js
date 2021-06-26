import React from 'react';

import 'src/styles/TodayCalories.scss';
import ConsumptionListItem from './ConsumptionListItem';
import dummyConsumptions from './dummyConsumptions';

console.log(dummyConsumptions);

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
                  {dummyConsumptions.map((consumption) => (
                    <ConsumptionListItem
                      key={consumption.id}
                      consumption={consumption}
                    />
                  ))}
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
