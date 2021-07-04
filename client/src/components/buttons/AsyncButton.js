import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'src/components/layout/Spinner';

const AsyncButton = ({ text, loading, disabled, ...rest }) => {
  return (
    <button disabled={loading || disabled} {...rest}>
      {loading ? <Spinner /> : text}
    </button>
  );
};

AsyncButton.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

export default AsyncButton;
