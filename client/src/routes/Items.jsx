import React from "react";
import Navbar from "../components/NavBar";
import useFetchItems from "../lib/FetchHook";
import { addToCart } from "../lib/Cart";

const Items = () => {
  const items = useFetchItems();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`Item added to cart!`);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center p-8">
        <p className="text-3xl md:text-6xl">Items for Sale</p>

        <div className="flex flex-wrap gap-6 mt-4">
          {items.length > 0 ? (
            items.map((item) => (
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

                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                >
                  Add to cart
                </button>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Items;
