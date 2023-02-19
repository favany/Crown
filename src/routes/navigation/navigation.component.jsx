import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// img
import logo from '../../assets/crown.svg';

// Component
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// Context
import { selectCurrentUser } from '../../store/user/user.selector';
// import { CartContext } from '../../contexts/cart.context';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

// Utils
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  console.log('currentUser', currentUser);

  const signOutHandler = () => {};

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
          {currentUser ? (
            <>
              <span className="nav-link" style={{ cursor: 'inherit' }}>
                Hello,{currentUser.displayName}.
              </span>
              <span className="nav-link" onClick={signOutHandler}>
                SIGN OUT
              </span>
            </>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
