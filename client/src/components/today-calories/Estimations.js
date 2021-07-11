import React from 'react';
import PropTypes from 'prop-types';

const Estimations = ({ profile }) => {
  console.log(profile);
  return (
    <>
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
  );
};

Estimations.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Estimations;
