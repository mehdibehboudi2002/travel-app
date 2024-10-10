import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (Number(item.price) * (item.quantity || 0)), 0);
    setTotalPrice(total);
    
    const items = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    setTotalItems(items);
  }, [cart]);

  const addItemToCart = (item) => {
    console.log(item);  
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };
  
  const removeItemFromCart = (itemId) => {
    console.log(itemId);  
    setCart((prevCart) => {
      const item = prevCart.find((cartItem) => cartItem.id === itemId);
      if (item.quantity === 1) {
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      } else {
        return prevCart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
