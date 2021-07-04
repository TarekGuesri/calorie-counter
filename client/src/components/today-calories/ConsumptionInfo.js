import React from 'react';

import AsyncButton from 'src/components/buttons/AsyncButton';

const ConsumptionInfo = () => {
  return (
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

        <div className="row">
          <a className="danger-button  btn-lg rounded-pill mt-4" role="button">
            Clear
          </a>

          <AsyncButton
            type="submit"
            text="Save"
            className="primary-button btn-lg rounded-pill mt-4"
            loading={false}
          />
        </div>

        {/* /.btn-list-totals */}
      </form>
      {/* /form */}
    </div>
  );
};

export default ConsumptionInfo;
