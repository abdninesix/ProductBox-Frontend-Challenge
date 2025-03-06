import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Button from "../components/Button";

const AddItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = { name, price, img: image };

    const response = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    if (response.ok) {
      alert("Item added successfully!");
      setName("");
      setPrice("");
      setImage("");
    } else {
      alert("Failed to add item.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center p-8">
        <p className="text-2xl md:text-6xl">Put up items for sale</p>

        <form
          className="flex flex-col p-4 justify-center bg-gray-200 gap-6 shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-6 justify-between">
            <label htmlFor="name">Name:</label>
            <input
              className="p-1 rounded-sm outline-none"
              type="text"
              name="name"
              placeholder="Item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-6 justify-between">
            <label htmlFor="price">Price:</label>
            <input
              className="p-1 rounded-sm outline-none"
              type="text"
              name="price"
              placeholder="Item price in number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-6 justify-between">
            <label htmlFor="image">Image URL:</label>
            <input
              className="p-1 rounded-sm outline-none"
              type="text"
              name="image"
              placeholder="/img/image.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <button
            className="flex w-fit p-2 bg-gray-300 rounded-md hover:bg-black hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </form>

        <p>
          <Button to="/Items">View Items</Button>
        </p>
      </div>
    </div>
  );
};

export default AddItems;
