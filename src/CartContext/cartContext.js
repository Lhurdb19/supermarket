import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalCart: 0,
  isCartDropOpen: false,
  setIsCartDropOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(storedCartItems);
  const [cartCount, setCartCount] = useState(0);
  const [totalCart, setTotalCart] = useState(0);
  const [isCartDropOpen, setIsCartDropOpen] = useState(false);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setTotalCart(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    const existingCartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    totalCart,
    isCartDropOpen,
    setIsCartDropOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};