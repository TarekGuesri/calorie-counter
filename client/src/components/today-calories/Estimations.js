import React from 'react';
import PropTypes from 'prop-types';
import getEstimations from 'src/utils/getEstimations';

const Estimations = ({ profile }) => {
  const estimations = getEstimations(profile);
  const { BMR, minusQuart, minusHalf, plusQuart, plusHalf } = estimations;

  return (
    <>
      <tr>
        <td className="text-center" colSpan="2">
          <h3>Calories needed to</h3>
        </td>
      </tr>
      <tr>
        <td>Maintain weight</td>
        <td className="subtotal">{BMR}</td>
      </tr>
      <tr className="border-top border-secondary">
        <td>0.25 kg/week loss</td>
        <td className="subtotal">{minusQuart}</td>
      </tr>
      <tr>
        <td>0.5 kg/week loss</td>
        <td className="subtotal">{minusHalf}</td>
      </tr>
      <tr className="border-top border-secondary">
        <td>0.25 kg/week gain</td>
        <td className="subtotal">{plusQuart}</td>
      </tr>
      <tr>
        <td>0.5 kg/week gain</td>
        <td className="subtotal">{plusHalf}</td>
      </tr>
    </>
  );
};

Estimations.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Estimations;
