import React from 'react';

import Spinner from 'src/components/layout/Spinner';

const PageSpinner = () => {
  return (
    <div className="text-success">
      <Spinner style={{ marginTop: '46vh' }} />
    </div>
  );
};

export default PageSpinner;
