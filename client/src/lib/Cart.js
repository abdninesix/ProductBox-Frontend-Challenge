export const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if item exists
  } else {
    cart.push({ ...item, quantity: 1 }); // Add item with quantity = 1
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const decreaseQuantity = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemIndex = cart.findIndex(cartItem => cartItem.id === id);
  
  if (itemIndex !== -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1; // Decrease quantity
    } else {
      cart.splice(itemIndex, 1); // Remove item if quantity is 1
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartItems = () => JSON.parse(localStorage.getItem("cart")) || [];

export const removeFromCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};
