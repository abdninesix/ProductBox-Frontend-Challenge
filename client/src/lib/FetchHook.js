import { useEffect, useState } from "react";

const useFetchItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items") // Backend API
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return items;
};

export default useFetchItems;
