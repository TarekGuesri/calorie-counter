import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        className="form-control is-invalid"
        id={name}
        name={name}
        placeholder={label}
        {...rest}
      />
      <div className="invalid-feedback">Please provide a valid city.</div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
