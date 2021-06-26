import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, className, errors, ...rest }) => {
  const error = errors.find((error) => error.param === name);
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        className={`form-control${error ? ` is-invalid` : ''} ${className}`}
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
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.array,
};
TextInput.defaultProps = {
  errors: [],
};

export default TextInput;
