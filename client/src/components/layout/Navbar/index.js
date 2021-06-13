import React from 'react';
import UserMenu from './UserMenu';
import AuthButtons from './AuthButtons';

const auth = false;

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        backgroundColor: '#FDFDFD',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
      }}
    >
      <div className="container-fluid box px-5">
        <a className="navbar-brand" href="#">
          CaloriesCounter
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Centered nav only
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
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
