"use client";

import {
  getCart,
  getCartTotal,
  removeFromCart,
  updateCartItemQuantity,
  type CartItem,
} from "@/lib/cart";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.getElementById("cartOverlay")?.classList.add("active");
    } else {
      document.body.classList.remove("no-scroll");
      document.getElementById("cartOverlay")?.classList.remove("active");
    }
  }, [isOpen]);

  useEffect(() => {
    const loadCart = () => {
      setCartItems(getCart());
    };

    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId: string, change: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  const subtotal = getCartTotal();

  return (
    <>
      <div
        className="overlay fixed top-0 left-0 w-full h-full bg-black/50 hidden z-[9998] cursor-pointer"
        id="cartOverlay"
        onClick={onClose}
      ></div>

      <div
        className={`cart-drawer fixed top-0 -right-full w-full md:w-[400px] h-full bg-white shadow-[-2px_0_10px_rgba(0,0,0,0.1)] z-[9999] overflow-y-auto transition-all duration-300 ${
          isOpen ? "right-0" : ""
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h4 className="m-0 text-lg font-bold">Your Cart</h4>
          <button
            className="bg-transparent border-none text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <Link
                href="/"
                onClick={onClose}
                className="inline-block bg-gray-800 text-white py-2 px-6 hover:bg-gray-900 transition font-semibold uppercase tracking-wide"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 pb-4 border-b border-gray-200"
                  >
                    <Link
                      href={`/${item.slug}`}
                      onClick={onClose}
                      className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden"
                    >
                      <Image
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/${item.slug}`}
                        onClick={onClose}
                        className="block"
                      >
                        <h5 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                          {item.name}
                        </h5>
                      </Link>
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-sm min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="px-2 py-1 text-gray-700 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="ml-auto text-gray-500 hover:text-red-600 transition"
                          aria-label="Remove item"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-900">Subtotal:</span>
                  <span className="font-bold text-lg text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="block w-full bg-gray-800 text-white py-3 px-6 text-center font-semibold uppercase tracking-wide hover:bg-gray-900 transition mb-2"
                >
                  View Cart
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
