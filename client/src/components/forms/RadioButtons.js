import React from 'react';
import PropTypes from 'prop-types';

const RadioButtons = ({ name, value, radioOptions, onChange }) => {
  return (
    <div>
      {radioOptions.map((option) => (
        <div key={option.id} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={option.id}
            value={option.id}
            checked={value === option.id}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

RadioButtons.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  radioOptions: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtons;
