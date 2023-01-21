import React, { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems, productToAdd);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  console.log(existingCartItem);

  // cart item already exists
  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  // cart item not exists
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, addItemToCart, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
