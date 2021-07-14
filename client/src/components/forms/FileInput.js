import React from 'react';
import PropTypes from 'prop-types';

const FileInput = ({
  name,
  className,
  label,
  errors,
  handleChange,
  reference,
  ...rest
}) => {
  const error = errors.find((error) => error.param === name);
  return (
    <div className="text-start">
      {label && (
        <label htmlFor={name} className="form-label mb-0 mt-1">
          {label}
        </label>
      )}
      <input
        className={`form-control mt-2${
          error ? ` is-invalid` : ''
        } ${className}`}
        type="file"
        id={name}
        onChange={(e) => handleChange(e.target.files[0])}
        ref={reference}
        {...rest}
      />
      <div className="invalid-feedback">{error?.msg}</div>
    </div>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  reference: PropTypes.object, // The reference is used so we can empty the file input value
  errors: PropTypes.array,
  rest: PropTypes.any,
};

FileInput.defaultProps = {
  className: '',
  errors: [],
};

export default FileInput;
