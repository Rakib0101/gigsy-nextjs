// Cart utility functions for localStorage management

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
  // Optional fields for customization
  number?: string; // For number balloons
  color?: string; // For color variants
  assemblyOption?: "yes" | "no"; // Assembly preference
  assemblyInstructions?: string; // Custom assembly instructions
}

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item: CartItem): void => {
  if (typeof window === "undefined") return;

  const cart = getCart();

  // Check if item already exists (same ID)
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    // Update quantity if item exists
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    // Add new item
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const removeFromCart = (itemId: string): void => {
  if (typeof window === "undefined") return;

  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const updateCartItemQuantity = (
  itemId: string,
  quantity: number
): void => {
  if (typeof window === "undefined") return;

  if (quantity <= 0) {
    removeFromCart(itemId);
    return;
  }

  const cart = getCart();
  const updatedCart = cart.map((item) =>
    item.id === itemId ? { ...item, quantity } : item
  );
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const updateCartItem = (
  itemId: string,
  updates: Partial<CartItem>
): void => {
  if (typeof window === "undefined") return;

  const cart = getCart();
  const updatedCart = cart.map((item) =>
    item.id === itemId ? { ...item, ...updates } : item
  );
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const clearCart = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartItemCount = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};
