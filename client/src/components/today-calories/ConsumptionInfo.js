import React from 'react';
import PropTypes from 'prop-types';

import AsyncButton from 'src/components/buttons/AsyncButton';
import CaloriesStats from './CaloriesStats';

const ConsumptionInfo = ({
  consumptionList,
  totalCalories,
  saved,
  saving,
  saveConsumptionList,
  clearConsumptionList,
}) => {
  return (
    <div className="list-totals">
      <form action="#" method="get" acceptCharset="utf-8">
        <CaloriesStats totalCalories={totalCalories} />
        <div className="row">
          <a
            className="danger-button  btn-lg rounded-pill mt-4"
            role="button"
            disabled={consumptionList.length <= 0}
            onClick={clearConsumptionList}
          >
            Clear
          </a>

          <AsyncButton
            type="submit"
            text="Save"
            className="primary-button btn-lg rounded-pill mt-4"
            loading={saving}
            disabled={saved}
            onClick={() => saveConsumptionList(consumptionList)}
          />
        </div>

        {/* /.btn-list-totals */}
      </form>
      {/* /form */}
    </div>
  );
};

ConsumptionInfo.propTypes = {
  consumptionList: PropTypes.array.isRequired,
  totalCalories: PropTypes.number.isRequired,
  saved: PropTypes.bool.isRequired,
  saving: PropTypes.bool.isRequired,
  clearConsumptionList: PropTypes.func.isRequired,
  saveConsumptionList: PropTypes.func.isRequired,
};

export default ConsumptionInfo;
