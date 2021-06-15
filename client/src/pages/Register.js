import React, { useState } from 'react';
import axios from 'axios';

import TextInput from 'src/components/forms/TextInput';
import AsyncButton from 'src/components/buttons/AsyncButton';
import 'src/styles/Auth.scss';

const Register = () => {
  const [state, setState] = useState({
    username: 'john',
    email: '',
    password: '',
    confirmPassword: '',
    loading: false,
    errors: [],
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await axios.post('auth/register');
    console.log(res);
  };

  const { username, email, password, confirmPassword, loading, errors } = state;

  return (
    <div className="form-box text-center p-5 m-5 mx-auto bg-light">
      <form className="form-signin" onSubmit={handleRegister}>
        <h1 className="form-title h3 mb-5 font-weight-normal">
          Create an account
        </h1>

        <TextInput
          name="username"
          value={username}
          label="Username"
          type="text"
          required
        />
        <TextInput
          name="email"
          value={email}
          label="Email"
          type="email"
          required
        />
        <TextInput
          name="password"
          value={password}
          label="Password"
          type="password"
          required
        />
        <TextInput
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          type="password"
          required
        />

        <div className="checkbox my-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>

        <AsyncButton
          type="submit"
          text="Sign up"
          className="primary-button btn-lg rounded-pill mt-1 py-2 px-4"
          loading={loading}
        />
      </form>
    </div>
  );
};

export default Register;
