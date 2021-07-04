import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'src/styles/TodayCalories.scss';
import {
  getConsumptionList,
  updateConsumptionQuantity,
  updateConsumptionCalories,
  deleteConsumptionCalories,
} from 'src/actions/consumptionList';
import Spinner from 'src/components/layout/Spinner';
import ConsumptionListItem from './ConsumptionListItem';

const ConsumptionList = ({
  consumptionList,
  loading,
  saved,
  getConsumptionList,
  updateConsumptionQuantity,
  updateConsumptionCalories,
  deleteConsumptionCalories,
}) => {
  useEffect(() => {
    getConsumptionList();
  }, []);
  if (loading) {
    return (
      <div className="text-success mt-5">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="list-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="main-heading">Consumption List</div>
            <div className="table-list table-responsive">
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
                  {consumptionList.map((consumption) => (
                    <ConsumptionListItem
                      key={consumption.id}
                      consumption={consumption}
                      updateConsumptionQuantity={updateConsumptionQuantity}
                      updateConsumptionCalories={updateConsumptionCalories}
                      deleteConsumptionCalories={deleteConsumptionCalories}
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
                  <a href="#" className="update round-black-btn">
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

const mapStateToProps = (state) => ({
  consumptionList: state.consumptionList.consumptionList,
  loading: state.consumptionList.loading,
  saved: state.consumptionList.saved,
});

ConsumptionList.propTypes = {
  consumptionList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  saved: PropTypes.bool.isRequired,
  getConsumptionList: PropTypes.func.isRequired,
  updateConsumptionQuantity: PropTypes.func.isRequired,
  updateConsumptionCalories: PropTypes.func.isRequired,
  deleteConsumptionCalories: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getConsumptionList,
  updateConsumptionQuantity,
  updateConsumptionCalories,
  deleteConsumptionCalories,
})(ConsumptionList);
