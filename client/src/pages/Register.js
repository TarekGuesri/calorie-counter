import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { WEBSITE_NAME } from 'src/utils/brand';
import TextInput from 'src/components/forms/TextInput';
import AsyncButton from 'src/components/buttons/AsyncButton';
import 'src/styles/Auth.scss';
import { login } from 'src/actions/auth';

const Register = ({ isAuthenticated, login }) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    loading: false,
    errors: [],
  });

  const handleOnChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setState({ ...state, errors: [], loading: true });
    const { username, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      setState((prevState) => ({
        ...prevState,
        errors: [{ param: 'confirmPassword', msg: 'Passwords do not match' }],
        loading: false,
      }));

      return;
    }

    const formData = { username, email, password };
    try {
      const res = await axios.post('auth/register', formData);

      login(res.data);
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      setState((prevState) => ({ ...prevState, errors, loading: false }));
    }
  };

  const { username, email, password, confirmPassword, loading, errors } = state;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-box text-center p-5 m-5 mx-auto bg-light">
      <Helmet>
        <title>{`${WEBSITE_NAME} - Sign up`}</title>
      </Helmet>
      <form className="form-signin" onSubmit={handleRegister}>
        <h1 className="form-title h3 mb-5 font-weight-normal">
          Create an account
        </h1>

        <TextInput
          name="username"
          value={username}
          label="Username*"
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
        <TextInput
          name="password"
          value={password}
          label="Password*"
          type="password"
          required
          errors={errors}
          onChange={handleOnChange}
        />
        <TextInput
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password*"
          type="password"
          required
          errors={errors}
          onChange={handleOnChange}
        />

        <div className="my-4">
          <p>
            Do you have an account already? log in{' '}
            <Link style={{ fontWeight: '400' }} to="/login">
              here
            </Link>{' '}
          </p>
        </div>

        <AsyncButton
          type="submit"
          text="Sign up"
          className="primary-button btn-lg rounded-pill mt-1 py-2 px-4"
          loading={loading}
          disabled={!username || !email || !password || !confirmPassword}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { login })(Register);
