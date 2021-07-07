import React from 'react';
import PropTypes from 'prop-types';

const profile = false;
const CaloriesStats = ({ totalCalories }) => {
  return (
    <>
      <table>
        <tbody>
          {profile ? (
            <>
              {' '}
              <tr>
                <td className="text-center" colSpan="2">
                  <h3>Calories needed to</h3>
                </td>
              </tr>
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
            </>
          ) : (
            <tr>
              <td className="text-center pb-3" colSpan="2">
                In order to get the estimation of the number of calories you
                need to consume, you need to complete your profile{' '}
                <a href="/profile">here</a>
              </td>
            </tr>
          )}
          <tr className="total-row border-top border-secondary">
            <td>{"Today's calories"}</td>
            <td className="price-total">{totalCalories}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

CaloriesStats.propTypes = {
  totalCalories: PropTypes.number.isRequired,
};

export default CaloriesStats;
