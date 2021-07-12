import React from 'react';
import PropTypes from 'prop-types';

import ActionModal from 'src/components/modals/ActionModal';

const AddFood = ({ modalRef, handleClose }) => {
  console.log(modalRef);

  return (
    <ActionModal
      modalRef={modalRef}
      title="Add Food"
      handleClose={handleClose}
      actions={
        <>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Understood
          </button>
        </>
      }
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quis?
    </ActionModal>
  );
};

AddFood.propTypes = {
  modalRef: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddFood;
