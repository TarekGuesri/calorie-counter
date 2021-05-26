import React from 'react';
import PropTypes from 'prop-types';

const AuthButtons = ({ location }) => {
  const display = location === 'outside' ? ' d-none d-lg-flex' : ' d-lg-none';
  if (location === 'collapse') {
    return (
      <>
        <li className={`navbar-item${display}`}>
          <a className="nav-link" aria-current="page" href="#">
            Log in
          </a>
        </li>
        <li className={`navbar-item${display}`}>
          <a className="nav-link" aria-current="page" href="#">
            Sign up
          </a>
        </li>
      </>
    );
  } else {
    return (
      <ul className={`navbar-nav${display}`}>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Log in
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link primary-button ms-2"
            aria-current="page"
            href="#"
          >
            Sign up
          </a>
        </li>
      </ul>
    );
  }
};

AuthButtons.propTypes = {
  location: PropTypes.oneOf(['collapse', 'outside']),
};

export default AuthButtons;
