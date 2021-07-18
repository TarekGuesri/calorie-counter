import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Modal from 'bootstrap/js/dist/modal';

import ActionModal from 'src/components/modals/ActionModal';
import AsyncButton from 'src/components/buttons/AsyncButton';

const RemoveFood = ({ modalRef, target, handleClose, handleGetFoods }) => {
  const [state, setState] = useState({
    loading: false,
    errorMessage: '',
  });

  const handleRemoveFood = async () => {
    setState({ ...state, loading: true, errorMessage: '' });

    try {
      await axios.delete(`foods/${target._id}`);

      const modalEle = modalRef.current;
      const bsModal = Modal.getInstance(modalEle);
      bsModal.hide();

      handleGetFoods();

      handleClose();
    } catch (error) {
      const {
        response: { data },
      } = error;
      setState((prevState) => ({
        ...prevState,
        loading: false,
        errorMessage: data,
      }));
    }
  };

  const { loading, errorMessage } = state;

  return (
    <ActionModal
      modalRef={modalRef}
      title="Delete Food"
      handleClose={handleClose}
      actions={
        <AsyncButton
          type="submit"
          text="Delete"
          className="danger-button btn-lg rounded-pill ms-0 ms-sm-4"
          loading={loading}
          onClick={handleRemoveFood}
        />
      }
    >
      <div className="px-4">
        <div>
          Are you sure you want to delete the food{' '}
          <h6 className="d-inline">{target.name}</h6>? <br /> (This will also
          delete it from your consumption list)
        </div>
        {errorMessage && (
          <div className="alert alert-danger mt-4" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    </ActionModal>
  );
};

RemoveFood.propTypes = {
  modalRef: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleGetFoods: PropTypes.func.isRequired,
};

export default RemoveFood;
