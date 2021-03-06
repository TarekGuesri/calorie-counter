import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserMenu = ({ user, location, logout }) => {
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
          <img src="images/default-profile-picture.png" alt="profile" />
          <span className="mx-2">
            {user.username} <i className="bi bi-chevron-down"></i>
          </span>
        </a>
        <ul
          className="dropdown-menu "
          aria-labelledby="navbarDarkDropdownMenuLink"
        >
          <li>
            <Link className="dropdown-item" to="/today">
              <i className="fas fa-list user-dropdown-icon"></i>{' '}
              {'Consumption List'}
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/my-foods">
              <i className="fas fa-utensils user-dropdown-icon"></i> My Foods
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/profile">
              <i className="fa fa-user user-dropdown-icon"></i> Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/settings">
              <i className="fas fa-cog user-dropdown-icon"></i>Settings
            </Link>
          </li>
          <li>
            <a onClick={logout} className="dropdown-item" href="#!">
              <i className="fas fa-sign-out-alt user-dropdown-icon"></i> Logout
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

UserMenu.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.oneOf(['collapse', 'outside']),
  logout: PropTypes.func.isRequired,
};

export default UserMenu;
