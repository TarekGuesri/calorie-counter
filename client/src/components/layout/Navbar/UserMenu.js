import React from 'react';
import PropTypes from 'prop-types';

const UserMenu = ({ location }) => {
  const display = location === 'collapse' ? ' d-lg-none' : ' d-none d-lg-block';
  return (
    <ul className={`navbar-nav ms-auto${display}`}>
      <li className="nav-item dropdown mx-1">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDarkDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="profile"
          />
          <span className="mx-2">
            John Doe <i className="bi bi-chevron-down"></i>
          </span>
        </a>
        <ul
          className="dropdown-menu "
          aria-labelledby="navbarDarkDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="#">
              <i className="fas fa-cog"></i> Setting
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="far fa-user"></i> Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

UserMenu.propTypes = {
  location: PropTypes.oneOf(['collapse', 'outside']),
};

export default UserMenu;
