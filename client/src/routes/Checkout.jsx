import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import { addToCart, decreaseQuantity, getCartItems, removeFromCart } from "../lib/Cart";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCartItems());
  }, []);

  /*
  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCartItems());
  };
  */

  const handleIncrease = (item) => {
    addToCart(item);
    setCart(getCartItems());
  };

  const handleDecrease = (id) => {
    decreaseQuantity(id);
    setCart(getCartItems());
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center p-8">
        <p className="text-3xl md:text-6xl">Your items</p>

        <div className="flex flex-wrap gap-6 mt-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-4 w-40 md:w-72 bg-gray-200 rounded-md cursor-pointer shadow-md"
              >
                <img
                  src={`http://localhost:3000${item.img}`}
                  alt={item.name}
                  className="w-full h-36 md:h-56 object-cover rounded-md duration-200"
                />
                <p className="font-semibold mt-2">{item.name}</p>
                <p className="text-gray-700">Price: ${item.price}</p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="focus:outline-none font-bold text-2xl bg-transparent p-2 hover:text-red-600"
                  >
                    -
                  </button>

                  <span className="font-bold">{item.quantity}</span>

                  <button
                    onClick={() => handleIncrease(item)}
                    className="focus:outline-none font-bold text-2xl bg-transparent p-2 hover:text-green-600"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="mt-6 bg-gray-200 rounded-md shaodw-md p-4 text-xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
