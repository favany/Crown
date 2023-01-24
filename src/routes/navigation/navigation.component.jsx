import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

// img
import logo from '../../assets/crown.svg';

// Component
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// Context
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

// Utils
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from './navigation.styles';
// import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  console.log('currentUser', currentUser);

  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log(res);
    setCurrentUser(null);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img className="logo" src={logo} alt="Logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Hello,{currentUser.displayName}. SIGN OUT
            </span>
          ) : (
            <NavLink to="/auth"> SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      {/* <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Hello,{currentUser.displayName}. SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div> */}
    </>
  );
};

export default Navigation;
