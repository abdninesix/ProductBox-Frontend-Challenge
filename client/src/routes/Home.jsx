import React from "react";
import Navbar from "../components/NavBar";
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center p-8">
        <div className="flex items-center justify-center rounded-full bg-gray-200 shadow-lg size-64 text-[150px]">
          <span>R.</span>
          <span className="text-blue-500">S</span>
        </div>

        <p className="flex text-3xl md:text-6xl">
          <span>Welcome to Rando</span>
          <span className="text-blue-500">Store</span>
        </p>

        <p className="flex flex-wrap items-center justify-center gap-6">
          <Button to="/new">Put items up for sale</Button> or
          <Button to="/items">Browse items</Button> &
          <Button to="/checkout">Checkout</Button>
        </p>
      </div>
    </div>
  );
};

export default Home;
