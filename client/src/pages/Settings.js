import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import axios from 'axios';

import { WEBSITE_NAME } from 'src/utils/brand';
import TextInput from 'src/components/forms/TextInput';

import AsyncButton from 'src/components/buttons/AsyncButton';
import { loadUser } from 'src/actions/auth';

const Settings = ({ user, loadUser }) => {
  const [state, setState] = useState({
    username: user?.username || '',
    email: user?.email || '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
    loading: false,
    errors: [],
  });

  const handleOnChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setState({ ...state, errors: [], loading: true });
    console.log('handleSaveSettings');
  };

  const {
    username,
    email,
    password,
    confirmPassword,
    oldPassword,
    loading,
    errors,
  } = state;

  return (
    <>
      <Helmet>
        <title>{`${WEBSITE_NAME} - Settings`}</title>
      </Helmet>
      <form className="form-signin" onSubmit={handleSaveSettings}>
        <h1 className="form-title h3 mb-5 font-weight-normal">Settings</h1>
        <TextInput
          name="username"
          value={username}
          label="Username"
          type="text"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="email"
          value={email}
          label="Email*"
          type="email"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <p>If you do not want to change your password, leave it empty</p>
        <TextInput
          name="oldPassword"
          value={oldPassword}
          label="Old Password"
          type="password"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="password"
          value={password}
          label="Password"
          type="password"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          type="password"
          required
          errors={errors}
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

Settings.propTypes = {
  user: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadUser })(Settings);
