import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'src/components/layout/Spinner';

const AsyncButton = ({ text, loading, ...rest }) => {
  return (
    <button disabled={loading} {...rest}>
      {loading ? <Spinner /> : text}
    </button>
  );
};

AsyncButton.propTypes = {
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AsyncButton;
