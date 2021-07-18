import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ActionModal from 'src/components/modals/ActionModal';
import TextInput from 'src/components/forms/TextInput';
import FileInput from 'src/components/forms/FileInput';
import AsyncButton from 'src/components/buttons/AsyncButton';
import CheckBox from 'src/components/forms/CheckBox';

const EditFood = ({ modalRef, target, handleClose, handleGetFoods }) => {
  // We use the ref so we can reset the value of the file input since it is not a controlled component
  const imageInputRef = useRef();

  // We use this ref so we can clear the success message's timeout on component unmounting
  const messageTimerRef = useRef(null);

  const [state, setState] = useState({
    name: target.name,
    caloriesPerPortion: target.caloriesPerPortion,
    replaceCurrentImage: false,
    image: null,
    loading: false,
    errors: [],
    successMessage: '',
  });

  useEffect(() => {
    // Clearning the timeout
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
      }
    };
  }, []);

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleCheck = async (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSetImage = (image) => {
    setState({ ...state, image });
  };

  const handleEmptyImage = () => {
    imageInputRef.current.value = '';
    setState({ ...state, image: null });
  };

  const handleEditFood = async (e) => {
    e.preventDefault();
    setState({ ...state, loading: true, errors: [] });
    const { name, caloriesPerPortion, image, replaceCurrentImage } = state;

    // Creating a FormData object so we can append the image file to it
    const formData = new FormData();

    formData.append('name', name);
    formData.append('caloriesPerPortion', caloriesPerPortion);
    if (replaceCurrentImage) {
      formData.append('replaceCurrentImage', replaceCurrentImage);
    }
    if (image) {
      formData.append('image', image, image.name);
    }

    try {
      const res = await axios.put(`foods/${target._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // We empty the the fields after a successfull add
      setState((prevState) => ({
        ...prevState,
        loading: false,
        image: null,
        // replaceCurrentImage: false,
        successMessage: res.data,
      }));

      if (imageInputRef.current) {
        imageInputRef.current.value = '';
      }

      handleGetFoods();

      // We also hide the success message after few seconds
      messageTimerRef.current = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          successMessage: '',
        }));
      }, 6 * 1000);
    } catch (error) {
      console.log(error);
      const {
        response: {
          data: { errors },
        },
      } = error;
      setState((prevState) => ({ ...prevState, errors, loading: false }));
    }
  };

  const {
    name,
    caloriesPerPortion,
    replaceCurrentImage,
    image,
    loading,
    successMessage,
    errors,
  } = state;

  return (
    <ActionModal
      modalRef={modalRef}
      title="Edit Food"
      handleClose={handleClose}
      actions={
        <>
          <button
            className="primary-button btn-lg rounded-pill ms-0 ms-sm-4"
            type="button"
            disabled={!image || !replaceCurrentImage}
            onClick={handleEmptyImage}
          >
            Empty Image
          </button>
          <AsyncButton
            type="submit"
            text="Edit"
            className="primary-button btn-lg rounded-pill ms-0 ms-sm-4"
            loading={loading}
            disabled={!name || !caloriesPerPortion}
            form="add-food-form"
          />
        </>
      }
    >
      <form className="px-5" id="add-food-form" onSubmit={handleEditFood}>
        <TextInput
          name="name"
          value={name}
          label="Name*"
          type="text"
          required
          min={1}
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="caloriesPerPortion"
          value={caloriesPerPortion}
          label="Calories per portion*"
          type="number"
          required
          min={1}
          errors={errors}
          onChange={handleOnChange}
        />

        <div className="mt-4 mb-2 text-start">
          <CheckBox
            name="replaceCurrentImage"
            text="Replace current image"
            checked={replaceCurrentImage}
            onChange={handleCheck}
          />
        </div>

        {replaceCurrentImage && (
          <FileInput
            name="image"
            label="Upload an image"
            handleChange={handleSetImage}
            reference={imageInputRef}
            errors={errors}
            accept="image/png, image/jpg, image/jpeg"
            disabled={!replaceCurrentImage}
          />
        )}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
      </form>
    </ActionModal>
  );
};

EditFood.propTypes = {
  modalRef: PropTypes.object.isRequired,
  target: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleGetFoods: PropTypes.func.isRequired,
};

export default EditFood;
