import React from 'react';
import PropTypes from 'prop-types';

const FileInput = ({ name, label, handleChange, reference, ...rest }) => {
  return (
    <div className="text-start">
      {label && (
        <label htmlFor={name} className="form-label mb-0 mt-1">
          {label}
        </label>
      )}
      <input
        className="form-control mt-1"
        type="file"
        id={name}
        onChange={(e) => handleChange(e.target.files[0])}
        ref={reference}
        {...rest}
      />
    </div>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  reference: PropTypes.object, // The reference is used so we can empty the file input value
  rest: PropTypes.any,
};

export default FileInput;
