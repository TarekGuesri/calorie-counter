import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthButtons = ({ location }) => {
  const display = location === 'outside' ? ' d-none d-lg-flex' : ' d-lg-none';
  if (location === 'collapse') {
    return (
      <>
        <li className={`navbar-item${display}`}>
          <NavLink className="nav-link" aria-current="page" to="/login">
            Log in
          </NavLink>
        </li>
        <li className={`navbar-item${display}`}>
          <NavLink className="nav-link" aria-current="page" to="/register">
            Sign up
          </NavLink>
        </li>
      </>
    );
  } else {
    return (
      <ul className={`navbar-nav${display}`}>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="#">
            Log in
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link primary-button ms-2"
            aria-current="page"
            to="#"
          >
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
};

AuthButtons.propTypes = {
  location: PropTypes.oneOf(['collapse', 'outside']),
};

export default AuthButtons;
