import React from 'react';

const Spinner = ({ ...rest }) => {
  return (
    <div className="d-flex justify-content-center" {...rest}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
