import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Estimations from './Estimations';

const CaloriesStats = ({ user: { profile }, totalCalories }) => {
  return (
    <>
      <table>
        <tbody>
          {profile ? (
            <Estimations profile={profile} />
          ) : (
            <tr>
              <td className="text-center pb-3" colSpan="2">
                In order to get the estimation of the number of calories you
                need to consume, you need to complete your profile{' '}
                <Link to="/profile">here</Link>
              </td>
            </tr>
          )}
          <tr className="total-row border-top border-secondary">
            <td>{'Total Calories'}</td>
            <td className="price-total">{totalCalories}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

CaloriesStats.propTypes = {
  user: PropTypes.object.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(CaloriesStats);
