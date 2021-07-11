import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { WEBSITE_NAME } from 'src/utils/brand';
import TextInput from 'src/components/forms/TextInput';
import RadioButtons from 'src/components/forms/RadioButtons';
import AsyncButton from 'src/components/buttons/AsyncButton';

const genderOptions = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' },
];

const Profile = () => {
  const [state, setState] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    loading: false,
    errors: [],
  });

  const handleOnChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    console.log('handleSaveProfile');
  };

  const { weight, height, age, gender, loading, errors } = state;

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Profile`}</title>
      </Helmet>
      <form className="form-signin" onSubmit={handleSaveProfile}>
        <h1 className="form-title h3 mb-5 font-weight-normal">Profile</h1>
        <TextInput
          name="weight"
          value={weight}
          label="Weight (Kg)"
          type="number"
          required
          min={1}
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="height"
          value={height}
          label="Height (cm)"
          type="number"
          required
          min={1}
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="age"
          value={age}
          label="Age"
          type="number"
          required
          min={1}
          errors={errors}
          onChange={handleOnChange}
        />

        <RadioButtons
          name="gender"
          value={gender}
          radioOptions={genderOptions}
          onChange={handleOnChange}
        />

        <AsyncButton
          type="submit"
          text="Save"
          className="primary-button btn-lg rounded-pill mt-4 py-2 px-4"
          loading={loading}
        />
      </form>
    </>
  );
};

export default Profile;
