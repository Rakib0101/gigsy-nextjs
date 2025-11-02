"use client";

import {
  getCart,
  getCartTotal,
  removeFromCart,
  updateCartItemQuantity,
  updateCartItem,
  type CartItem,
} from "@/lib/cart";
import { faTimes, faTrash, faGift, faFileText, faPlus } from "@fortawesome/free-solid-svg-icons";
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
  const [showGiftNote, setShowGiftNote] = useState(false);
  const [showOrderNote, setShowOrderNote] = useState(false);
  const [giftNote, setGiftNote] = useState("");
  const [orderNote, setOrderNote] = useState("");

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

  const handleNumberChange = (itemId: string, number: string) => {
    updateCartItem(itemId, { number });
  };

  const subtotal = getCartTotal();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div
        className="overlay fixed top-0 left-0 w-full h-full bg-black/50 hidden z-[9998] cursor-pointer"
        id="cartOverlay"
        onClick={onClose}
      ></div>

      <div
        className={`cart-drawer flex flex-col fixed top-0 -right-full w-full md:w-[400px] h-full bg-[#f9f3f1] shadow-[-2px_0_10px_rgba(0,0,0,0.1)] z-[99999] rounded-l-xl overflow-y-auto transition-all duration-300 ${
          isOpen ? "right-0" : ""
        }`}
      >
        <div className="p-6 sticky top-0 z-10">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 items-end">
              <h1
                className="text-3xl font-bold text-gray-900 m-0 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cart
              </h1>
              <p className="text-sm text-gray-900 uppercase tracking-wide">
                {totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"}
              </p>
            </div>
            <button
              className="px-4 py-2 bg-white rounded-lg text-xs font-semibold uppercase tracking-wide text-gray-700 hover:border-gray-600 transition"
              onClick={onClose}
            >
              CLOSE
            </button>
          </div>
        </div>
        <div className="p-6 grow flex flex-col gap-6">
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
              <div className="space-y-6 flex-1 mb-6 shrink-0">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-6 border-b border-gray-200"
                  >
                    <Link
                      href={`/${item.slug}`}
                      onClick={onClose}
                      className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden"
                    >
                      <Image
                        src={item.image || "/images/placeholder.jpg"}
                        alt={item.name || "Product"}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/${item.slug}`}
                        onClick={onClose}
                        className="block mb-2"
                      >
                        <h5 className="text-sm font-semibold text-gray-900 mb-1">
                          {item.name || "Product"}
                        </h5>
                      </Link>
                      
                      {/* Number Selection (if applicable) */}
                      {item.name?.toLowerCase().includes("number") && (
                        <div className="mb-2">
                          <label className="block text-xs font-semibold uppercase tracking-wide mb-1 text-gray-700">
                            NUMBER:
                          </label>
                          <input
                            type="text"
                            value={item.number || ""}
                            onChange={(e) =>
                              handleNumberChange(item.id, e.target.value)
                            }
                            placeholder="0"
                            maxLength={2}
                            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-sm font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="px-3 py-2 text-gray-500 hover:text-red-600 transition"
                            aria-label="Remove item"
                          >
                            <FontAwesomeIcon icon={faTrash} className="text-xs" />
                          </button>
                          <span className="px-3 py-2 text-sm font-semibold min-w-[2rem] text-center border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="px-3 py-2 text-gray-700 hover:bg-gray-100 transition"
                          >
                            <FontAwesomeIcon icon={faPlus} className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                {/* Notes Section */}
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => {
                      setShowGiftNote(!showGiftNote);
                      setShowOrderNote(false);
                    }}
                    className={`flex-1 py-2 px-4 border-2 text-xs font-semibold uppercase tracking-wide transition ${
                      showGiftNote
                        ? "border-gray-800 bg-gray-800 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <FontAwesomeIcon icon={faGift} className="mr-2" />
                    GIFT NOTE
                  </button>
                  <button
                    onClick={() => {
                      setShowOrderNote(!showOrderNote);
                      setShowGiftNote(false);
                    }}
                    className={`flex-1 py-2 px-4 border-2 text-xs font-semibold uppercase tracking-wide transition ${
                      showOrderNote
                        ? "border-gray-800 bg-gray-800 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <FontAwesomeIcon icon={faFileText} className="mr-2" />
                    ORDER NOTE
                  </button>
                </div>

                {showGiftNote && (
                  <div className="mb-6">
                    <textarea
                      value={giftNote}
                      onChange={(e) => setGiftNote(e.target.value)}
                      placeholder="Add a gift note..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none"
                    />
                  </div>
                )}

                {showOrderNote && (
                  <div className="mb-6">
                    <textarea
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="Add an order note..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none"
                    />
                  </div>
                )}

                {/* Subtotal */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                      SUBTOTAL
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Tax and shipping calculated at checkout
                  </p>
                </div>

                {/* Continue Button */}
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="block w-full bg-gray-800 text-white py-3 px-6 text-center font-semibold uppercase tracking-wide hover:bg-gray-900 transition"
                >
                  CONTINUE
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
