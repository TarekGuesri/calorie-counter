import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, className, errors, ...rest }) => {
  const error = errors.find((error) => error.param === name);
  return (
    <div className="form-floating">
      <input
        className={`form-control${error ? ` is-invalid` : ''} ${className}`}
        id={name}
        name={name}
        placeholder={label}
        {...rest}
      />
      <label className="floating-label" htmlFor={name}>
        {label}
      </label>
      <div className="invalid-feedback">{error?.msg}</div>
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.array,
};
TextInput.defaultProps = {
  className: '',
  errors: [],
};

export default TextInput;
