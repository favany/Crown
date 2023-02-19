import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckouthandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(false));
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckouthandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
