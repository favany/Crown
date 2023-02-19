import { createAction } from '../../utils/reducer/reducer.utils';

import { CART_ACTION_TYPES } from './cart.types';

import {
  addCartItem,
  removeCartItem,
  clearCartItem,
} from '../../utils/cart/cart.utils';

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const newCartItems = addCartItem(cartItems, cartItemToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
