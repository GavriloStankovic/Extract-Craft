import machineArray from "../../utils/machineSlider";
import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (index) => {
    const item = machineArray[index];
    const existingItem = cartItems.find((cartItem) => cartItem.index === index);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.index === index
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, index, quantity: 1, id: index }]);
    }

    const newTotalPrice = totalPrice + item.price;
    setTotalPrice(newTotalPrice);
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);

    if (item && item.quantity > 0) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      const newTotalPrice = updatedCartItems.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      );

      setCartItems(updatedCartItems);
      setTotalPrice(newTotalPrice);
    }
  };

  const resetCart = (id, price, quantity) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    const newTotalPrice = updatedCartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);

    if (updatedCartItems.length === 0) {
      setShowCart(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
