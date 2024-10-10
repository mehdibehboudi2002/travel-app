"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/Button/Button";

const Cart = () => {
  const { cart, removeItemFromCart, totalPrice, addItemToCart } = useCart();
  const [smallSummaryContainerHide, setSmallSummaryContainerHide] = useState(false);
  const [visibleItems, setVisibleItems] = useState(Array(cart.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
  
      if (scrollTop + windowHeight >= docHeight - 100) {
        setSmallSummaryContainerHide(true);
      } else {
        setSmallSummaryContainerHide(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    cart.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => {
          const updatedItems = [...prev];
          updatedItems[index] = true;
          return updatedItems;
        });
      }, index * 200); 
    });
  }, [cart]);

  return (
    <div className="w-full h-fit flex padding-container my-1 lg:my-7">
      <div className="w-1/5 h-56 hidden lg:flex flex-col justify-between items-center rounded-2xl sticky top-32 p-4 shadow-md text-blue-70 text-sm">
        <p>Total Price: <span className="font-bold">${totalPrice}</span></p>
        <Button type="submit" color="green" title="Finish Your Purchase" />
      </div>

      <div className={`${smallSummaryContainerHide ? 'bg-none opacity-100' : 'small-summery bg-white opacity-90'} w-full flex lg:hidden justify-between items-center py-1 pl-1 pr-10 md:pr-11 fixed bottom-0 left-0 right-0 transition-all duration-200 z-[500]`}>
        <div className="w-fit">
          <Button type="submit" color="green" title="Finish Your Purchase" py="py-2" px="px-4" textSize="text-xs" />
        </div>
        <p className={`text-xs ${smallSummaryContainerHide ? 'text-white' : 'text-blue-70'}`}>Total Price: <span className="font-bold">${totalPrice}</span></p>
      </div>

      <div className="w-full lg:w-4/5 flex flex-col items-center lg:ml-10 text-xs lg:text-base">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={item.id}
              className={`w-full h-fit flex flex-col 2xs:flex-row justify-between items-center ${index === cart.length - 1 ? 'border-none' : 'border-b'} ${index === 0 ? 'pb-4' : index === cart.length - 1 ? 'pt-4' : 'py-4'
                }`}
            >
              <div className={`${visibleItems[index] ? 'cart-items-animate-show' : 'cart-items-animate-hide'} w-full hidden sm:flex items-center`}>
                <img src={item.image} alt={item.name} className="size-40 object-cover rounded-2xl" />
                <div className="w-full ml-6 flex flex-col justify-center text-gray-30">
                  <div className="w-full flex justify-between">
                    <div className="w-1/2 flex flex-col 2xs:flex-row justify-between items-center">
                      <p className="text-xs lg:text-sm font-bold text-blue-70">{item.name}</p>
                      <p className="mt-3 2xs:mt-0 text-xs lg:text-sm">Price: ${item.price}</p>
                    </div>

                    <div className="w-fit flex items-center">
                      <Button type="button" color="green" title="-" py="py-1"
                        onClick={() => removeItemFromCart(item.id)}
                      />
                      <p className="mx-3 text-xs lg:text-sm">{item.quantity}</p>
                      <Button type="button" color="white" title="+" py="py-1"
                        onClick={() => addItemToCart(item)}
                      />
                    </div>
                  </div>

                  <div className="size-full flex justify-center 2xs:justify-between items-center mt-3 2xs:mt-0">
                    <p>
                      in <span className="text-green-550">{item.inHowManyCarts}</span> carts
                    </p>
                  </div>
                </div>
              </div>


              <div className={`${visibleItems[index] ? 'cart-items-animate-show' : 'cart-items-animate-hide'} w-full flex sm:hidden flex-col items-center`}>
                <div className="w-full flex justify-between">
                  <img src={item.image} alt={item.name} className="size-40 object-cover rounded-2xl" />

                  <div className="w-full flex flex-col justify-center text-gray-30">
                    <div className="w-full flex flex-col justify-between items-center">
                      <p className="text-xs font-bold text-blue-70 text-center">{item.name}</p>
                      <p className="mt-3 text-xs">Price: ${item.price}</p>
                    </div>

                    <div className="w-full flex justify-center items-center mt-3">
                      <p>
                        in <span className="text-green-550">{item.inHowManyCarts}</span> carts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center mt-4">
                  <Button type="button" color="green" title="-" py="py-2"
                    onClick={() => removeItemFromCart(item.id)}
                  />
                  <p className="mx-3 text-xs">{item.quantity}</p>
                  <Button type="button" color="white" title="+" py="py-2"
                    onClick={() => addItemToCart(item)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
