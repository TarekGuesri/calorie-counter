import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ActionModal from 'src/components/modals/ActionModal';
import TextInput from 'src/components/forms/TextInput';
import AsyncButton from 'src/components/buttons/AsyncButton';

const AddFood = ({ modalRef, handleClose }) => {
  console.log(modalRef);

  const [state, setState] = useState({
    name: '',
    caloriesPerPortion: '',
    image: null,
    loading: false,
    errors: [],
  });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSetImage = (image) => {
    console.log(image);
    setState({ ...state, image });
  };

  const handleAddFood = async () => {
    console.log('handleAddFood');
    console.log(state);
  };

  const { name, caloriesPerPortion, loading, errors } = state;

  return (
    <ActionModal
      modalRef={modalRef}
      title="Add Food"
      handleClose={handleClose}
      actions={
        <>
          <AsyncButton
            type="button"
            text="Add"
            className="primary-button btn-lg rounded-pill ms-0 ms-sm-4"
            loading={loading}
            onClick={handleAddFood}
          />
        </>
      }
    >
      <div className="px-5">
        <TextInput
          name="name"
          value={name}
          label="Name"
          type="text"
          required
          min={1}
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="caloriesPerPortion"
          value={caloriesPerPortion}
          label="Calories per portion"
          type="number"
          required
          min={1}
          errors={errors}
          onChange={handleOnChange}
        />
        <div className="mb-3 text-start">
          <label htmlFor="formFile" className="form-label mb-0 mt-1">
            Upload an image
          </label>
          <input
            className="form-control mt-1"
            type="file"
            id="formFile"
            onChange={(e) => handleSetImage(e.target.files[0])}
          />
        </div>
      </div>
    </ActionModal>
  );
};

AddFood.propTypes = {
  modalRef: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddFood;
