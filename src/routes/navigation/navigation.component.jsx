import React from 'react';

import { Outlet, Link } from 'react-router-dom';

import logo from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
