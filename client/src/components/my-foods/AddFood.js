import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ActionModal from 'src/components/modals/ActionModal';
import TextInput from 'src/components/forms/TextInput';
import FileInput from 'src/components/forms/FileInput';
import AsyncButton from 'src/components/buttons/AsyncButton';

const AddFood = ({ modalRef, handleClose }) => {
  // We use the ref so we can reset the value of the file input since it is not a controlled component
  const imageInputRef = useRef();

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
    // TODO : Add an image extention validation
    setState({ ...state, image });
  };

  const handleEmptyImage = () => {
    imageInputRef.current.value = '';
    setState({ ...state, image: null });
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    console.log('handleAddFood');
    setState({ ...state, loading: true });
    const { name, caloriesPerPortion, image } = state;

    // Creating a FormData object so we can append the image file to it
    const formData = new FormData();

    formData.append('name', name);
    formData.append('caloriesPerPortion', caloriesPerPortion);
    if (image) {
      formData.append('image', image, image.name);
    }

    console.log(formData);

    try {
      const res = await axios.post('foods', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      setState((prevState) => ({ ...prevState, loading: false }));
    } catch (error) {
      console.log(error);
      console.log(error?.response);
    }
  };

  const { name, caloriesPerPortion, image, loading, errors } = state;

  return (
    <ActionModal
      modalRef={modalRef}
      title="Add Food"
      handleClose={handleClose}
      actions={
        <>
          <button
            className="primary-button btn-lg rounded-pill ms-0 ms-sm-4"
            type="button"
            disabled={!image}
            onClick={handleEmptyImage}
          >
            Empty Image
          </button>
          <AsyncButton
            type="submit"
            text="Add"
            className="primary-button btn-lg rounded-pill ms-0 ms-sm-4"
            loading={loading}
            form="add-food-form"
          />
        </>
      }
    >
      <form className="px-5" id="add-food-form" onSubmit={handleAddFood}>
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

        <FileInput
          name="image"
          label="Upload an image"
          handleChange={handleSetImage}
          reference={imageInputRef}
          accept="image/png, image/jpg, image/jpeg"
        />
      </form>
    </ActionModal>
  );
};

AddFood.propTypes = {
  modalRef: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddFood;
