// written in useReducer

import React, { createContext, useReducer } from 'react';

import {
  addCartItem,
  removeCartItem,
  clearCartItem,
} from '../utils/cart/cart.utils';

import { createAction } from '../utils/reducer/reducer.utils';

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  total: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPE = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

// not containing business logics
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, isCartOpen } = state;

  const updateCartItemsReducer = (newCartItems) => {
    //dispatch new action with payload = { newCartItems, newCartTotal, newCartCount }

    // dispatch({
    //   type: CART_ACTION_TYPE.SET_CART_ITEMS,
    //   payload: {
    //     cartItems: newCartItems,
    //     cartTotal: newCartItems.reduce(
    //       (total, cartItem) => total + cartItem.quantity * cartItem.price,
    //       0
    //     ),
    //     cartCount: newCartItems.reduce(
    //       (total, cartItem) => total + cartItem.quantity,
    //       0
    //     ),
    //   },
    // });
    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartItems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        ),
        cartCount: newCartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        ),
      })
    );
  };

  const addItemToCart = (cartItemToAdd) => {
    const newCartItems = addCartItem(cartItems, cartItemToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    // dispatch({ type: CART_ACTION_TYPE.SET_IS_CART_OPEN, payload: bool });
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
