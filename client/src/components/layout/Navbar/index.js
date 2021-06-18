import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from 'src/actions/auth';

import UserMenu from './UserMenu';
import AuthButtons from './AuthButtons';

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-static-top">
      <div className="container-fluid box px-5">
        <NavLink className="navbar-brand" to="/">
          CaloriesCounter
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/">
                Centered nav only
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                to="/page"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </NavLink>
            </li>

            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <UserMenu logout={logout} location="collapse" />
              </li>
            ) : (
              <AuthButtons location="collapse" />
            )}
          </ul>
        </div>
        {isAuthenticated ? (
          <UserMenu logout={logout} location="outside" />
        ) : (
          <AuthButtons location="outside" />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout })(Navbar);
