import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import axios from 'axios';

import { WEBSITE_NAME } from 'src/utils/brand';
import TextInput from 'src/components/forms/TextInput';

import AsyncButton from 'src/components/buttons/AsyncButton';
import { loadUser } from 'src/actions/auth';

const Settings = ({ user, loadUser }) => {
  // We use this ref so we can clear the success message's timeout on component unmounting
  const messageTimerRef = useRef(null);

  const [state, setState] = useState({
    username: user?.username || '',
    email: user?.email || '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
    loading: false,
    successMessage: '',
    errors: [],
  });

  useEffect(() => {
    // Clearning the timeout
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
      }
    };
  }, []);

  const handleOnChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setState({ ...state, successMessage: '', errors: [], loading: true });

    const { username, email, password, confirmPassword, oldPassword } = state;

    if (password !== confirmPassword) {
      setState((prevState) => ({
        ...prevState,
        errors: [{ param: 'confirmPassword', msg: 'Passwords do not match' }],
        loading: false,
      }));

      return;
    }

    const formData = { username, email, password, oldPassword };

    try {
      const res = await axios.put('auth/self', formData);

      setState((prevState) => ({
        ...prevState,
        successMessage: res.data,
        loading: false,
      }));

      // We load the user so we get the updated data
      loadUser();

      // We also hide the success message after few seconds
      messageTimerRef.current = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          successMessage: '',
        }));
      }, 6 * 1000);
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      setState((prevState) => ({ ...prevState, errors, loading: false }));
    }
  };

  const {
    username,
    email,
    password,
    confirmPassword,
    oldPassword,
    loading,
    successMessage,
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
          required={confirmPassword || password}
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="password"
          value={password}
          label="New Password"
          type="password"
          required={confirmPassword || oldPassword}
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          type="password"
          required={confirmPassword || password}
          errors={errors}
          onChange={handleOnChange}
        />

        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
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
