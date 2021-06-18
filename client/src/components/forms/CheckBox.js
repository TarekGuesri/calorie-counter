import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ name, text, checked, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span>{text}</span>
    </label>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
