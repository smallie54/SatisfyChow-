import { useState } from "react";
import { StoreContext } from "./StoreContext";
import { foodList } from "../assets/assets";

const StoreProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      if (!prev[itemId]) return prev;
      if (prev[itemId] === 1) {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const deleteFromCart = (itemId) => {
    setCartItems(prev => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  };

  const clearCart = () => setCartItems({});

  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  const getCartTotal = () => {
    return foodList.reduce((total, item) => {
      if (cartItems[item._id]) {
        return total + item.price * cartItems[item._id];
      }
      return total;
    }, 0);
  };

  const contextValue = {
    foodList,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    getCartCount,
    getCartTotal,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;