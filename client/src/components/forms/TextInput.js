import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, errors, ...rest }) => {
  const error = errors.find((error) => error.param === name);
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        className={`form-control${error ? ` is-invalid` : ''}`}
        id={name}
        name={name}
        placeholder={label}
        {...rest}
      />
      <div className="invalid-feedback">{error?.msg}</div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.array,
};
TextInput.defaultProps = {
  errors: [],
};

export default TextInput;
