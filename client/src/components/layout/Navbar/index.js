import React from 'react';
import { NavLink } from 'react-router-dom';

import UserMenu from './UserMenu';
import AuthButtons from './AuthButtons';

const auth = false;

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light navbar-static-top"
      style={{
        backgroundColor: '#FDFDFD',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
      }}
    >
      <div className="container-fluid box px-5">
        <NavLink className="navbar-brand" to="/page">
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

            {auth ? (
              <li className="nav-item dropdown">
                <UserMenu location="collapse" />
              </li>
            ) : (
              <AuthButtons location="collapse" />
            )}
          </ul>
        </div>
        {auth ? (
          <UserMenu location="outside" />
        ) : (
          <AuthButtons location="outside" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
