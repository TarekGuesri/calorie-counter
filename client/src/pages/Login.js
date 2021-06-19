import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import axios from 'axios';

import { WEBSITE_NAME } from 'src/utils/brand';
import TextInput from 'src/components/forms/TextInput';
import CheckBox from 'src/components/forms/CheckBox';
import AsyncButton from 'src/components/buttons/AsyncButton';
import 'src/styles/Auth.scss';
import { login } from 'src/actions/auth';

const Login = ({ isAuthenticated, login }) => {
  const [state, setState] = useState({
    email: 'test@mail.com',
    password: '123',
    remember: false,
    loading: false,
    errors: [],
  });

  const handleOnChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleCheck = async (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setState({ ...state, errors: [], loading: true });
    const { email, password, remember } = state;

    const formData = { email, password, remember };
    try {
      const res = await axios.post('auth/login', formData);

      login(res.data);

      // TODO : Add auth to global state
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      setState((prevState) => ({ ...prevState, errors, loading: false }));
    }
  };

  const { email, password, remember, loading, errors } = state;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-box text-center p-5 m-5 mx-auto bg-light">
      <Helmet>
        <title>{`${WEBSITE_NAME} - Sign in`}</title>
      </Helmet>
      <form className="form-signin" onSubmit={handleRegister}>
        <h1 className="form-title h3 mb-5 font-weight-normal">Sign in</h1>

        <TextInput
          name="email"
          value={email}
          label="Email"
          type="email"
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

        <div className="my-4">
          <CheckBox
            name="remember"
            text="Remember me"
            checked={remember}
            onChange={handleCheck}
          />
        </div>

        <AsyncButton
          type="submit"
          text="Login"
          className="primary-button btn-lg rounded-pill mt-1 py-2 px-4"
          loading={loading}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { login })(Login);
