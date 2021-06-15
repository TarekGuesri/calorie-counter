import React from 'react';

import TextInput from 'src/components/forms/TextInput';
import 'src/styles/Auth.scss';

const Register = () => {
  return (
    <div className="form-box text-center p-5 m-5 mx-auto bg-light">
      <form className="form-signin">
        <h1 className="form-title h3 mb-5 font-weight-normal">
          Create an account
        </h1>

        <TextInput name="username" label="Username" type="text" required />
        <TextInput name="email" label="Email" type="email" required />
        <TextInput name="password" label="Password" type="password" required />
        <TextInput
          name="confirm_password"
          label="Confirm Password"
          type="password"
          required
        />

        <div className="checkbox my-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button
          type="submit"
          className="primary-button btn-lg rounded-pill disabled mt-1 py-2 px-4"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
