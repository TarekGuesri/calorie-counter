import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'src/styles/TodayCalories.scss';
import {
  getConsumptionList,
  updateConsumptionQuantity,
  updateConsumptionCalories,
  addConsumption,
  deleteConsumption,
  clearConsumptionList,
  saveConsumptionList,
} from 'src/actions/consumptionList';
import Spinner from 'src/components/layout/Spinner';
import ConsumptionListItem from './ConsumptionListItem';
import ConsumptionInfo from './ConsumptionInfo';
import AddConsumption from './AddConsumption';

const ConsumptionList = ({
  consumptionList,
  totalCalories,
  loading,
  saved, // TODO : Add a modal to confirm saving when leaving the page without saving
  saving,
  getConsumptionList,
  updateConsumptionQuantity,
  updateConsumptionCalories,
  addConsumption,
  deleteConsumption,
  clearConsumptionList,
  saveConsumptionList,
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
        <AddConsumption addConsumption={addConsumption} />
        <div className="row">
          <div className="col-lg-8">
            <div className="main-heading">Consumptions</div>
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
                      deleteConsumption={deleteConsumption}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {/* /.table-list */}
          </div>
          {/* /.col-lg-8 */}
          <div className="col-lg-4">
            <ConsumptionInfo
              consumptionList={consumptionList}
              totalCalories={totalCalories}
              saved={saved}
              saving={saving}
              saveConsumptionList={saveConsumptionList}
              clearConsumptionList={clearConsumptionList}
            />
          </div>
          {/* /.col-lg-4 */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  consumptionList: state.consumptionList.consumptionList,
  totalCalories: state.consumptionList.totalCalories,
  loading: state.consumptionList.loading,
  saved: state.consumptionList.saved,
  saving: state.consumptionList.saving,
});

ConsumptionList.propTypes = {
  consumptionList: PropTypes.array.isRequired,
  totalCalories: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  saved: PropTypes.bool.isRequired,
  saving: PropTypes.bool.isRequired,
  getConsumptionList: PropTypes.func.isRequired,
  updateConsumptionQuantity: PropTypes.func.isRequired,
  updateConsumptionCalories: PropTypes.func.isRequired,
  addConsumption: PropTypes.func.isRequired,
  deleteConsumption: PropTypes.func.isRequired,
  clearConsumptionList: PropTypes.func.isRequired,
  saveConsumptionList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getConsumptionList,
  updateConsumptionQuantity,
  updateConsumptionCalories,
  addConsumption,
  deleteConsumption,
  clearConsumptionList,
  saveConsumptionList,
})(ConsumptionList);
