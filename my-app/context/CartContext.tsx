import { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inHowManyCarts: number;
}

interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemId: string) => void;
  totalPrice: number;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const initialCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + Number(item.price) * (item.quantity || 0),
      0
    );
    setTotalPrice(total);

    const items = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    setTotalItems(items);
  }, [cart]);

  const addItemToCart = (item: CartItem) => {
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

  const removeItemFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const item = prevCart.find((cartItem) => cartItem.id === itemId);
      if (!item) return prevCart;

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

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
