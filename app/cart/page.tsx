"use client";

import {
  getCart,
  getCartTotal,
  removeFromCart,
  updateCartItem,
  updateCartItemQuantity,
  type CartItem,
} from "@/lib/cart";
import {
  faFileText,
  faGift,
  faMinus,
  faPlus,
  faStore,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<
    "delivery" | "pickup"
  >("delivery");
  const [showGiftNote, setShowGiftNote] = useState(false);
  const [showOrderNote, setShowOrderNote] = useState(false);
  const [giftNote, setGiftNote] = useState("");
  const [orderNote, setOrderNote] = useState("");

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

  const handleAssemblyOptionChange = (itemId: string, option: "yes" | "no") => {
    updateCartItem(itemId, { assemblyOption: option });
  };

  const handleAssemblyInstructionsChange = (
    itemId: string,
    instructions: string
  ) => {
    updateCartItem(itemId, { assemblyInstructions: instructions });
  };

  const handleNumberChange = (itemId: string, number: string) => {
    updateCartItem(itemId, { number });
  };

  const subtotal = getCartTotal();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#f9f3f1] pt-52 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center py-20">
            <h1
              className="text-4xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Cart is Empty
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Start shopping to add items to your cart
            </p>
            <Link
              href="/"
              className="inline-block bg-gray-800 text-white py-3 px-8 font-semibold uppercase tracking-wide hover:bg-gray-900 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="bg-[#f6dfd9] py-6 rounded-t-2xl ">
          <h1
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cart
          </h1>
          <p className="text-center text-sm text-gray-600 uppercase tracking-wide">
            {totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#f9f3f1] rounded-b-2xl overflow-hidden">
          {/* Left Section - Product Details */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-6"
              >
                <div className="flex gap-6 mb-6">
                  {/* Product Image */}
                  <Link
                    href={`/${item.slug}`}
                    className="relative w-32 h-32 flex-shrink-0 bg-gray-100 rounded overflow-hidden"
                  >
                    <Image
                      src={item.image || "/images/placeholder.jpg"}
                      alt={item.name || "Product"}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/${item.slug}`}
                      className="block mb-2 hover:text-gray-600 transition"
                    >
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name || "Product"}
                      </h3>
                    </Link>
                    <p className="text-lg font-semibold text-gray-900 mb-4">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Number Selection (if applicable - e.g., number balloons) */}
                    {item.name?.toLowerCase().includes("number") && (
                      <div className="mb-4">
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-700">
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
                          className="w-20 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                      </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-500 hover:text-red-600 transition p-2"
                        aria-label="Remove item"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-3 py-2 text-gray-700 hover:bg-gray-100 transition"
                        >
                          <FontAwesomeIcon icon={faMinus} className="text-xs" />
                        </button>
                        <span className="px-4 py-2 text-sm font-semibold min-w-[3rem] text-center border-x border-gray-300">
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

                {/* Assembly Options */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-gray-900">
                    WOULD YOU LIKE YOUR BALLOONS ASSEMBLED INTO A BOUQUET?
                  </h4>
                  <div className="space-y-3 mb-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`assembly-${item.id}`}
                        checked={item.assemblyOption === "yes"}
                        onChange={() =>
                          handleAssemblyOptionChange(item.id, "yes")
                        }
                        className="w-4 h-4 text-gray-800 focus:ring-gray-800"
                      />
                      <span className="text-sm text-gray-700">YES</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`assembly-${item.id}`}
                        checked={item.assemblyOption === "no"}
                        onChange={() =>
                          handleAssemblyOptionChange(item.id, "no")
                        }
                        className="w-4 h-4 text-gray-800 focus:ring-gray-800"
                      />
                      <span className="text-sm text-gray-700">
                        NO, LEAVE LOOSE TIED WITH STRING IN A BAG
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-700">
                      ASSEMBLY INSTRUCTIONS
                    </label>
                    <textarea
                      value={item.assemblyInstructions || ""}
                      onChange={(e) =>
                        handleAssemblyInstructionsChange(
                          item.id,
                          e.target.value
                        )
                      }
                      placeholder="Add any specific assembly instructions here..."
                      rows={3}
                      className="w-full px-3 bg-transparent py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="p-6 border-l border-gray-200 sticky top-32">
              {/* Notes Section */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => {
                    setShowGiftNote(!showGiftNote);
                    setShowOrderNote(false);
                  }}
                  className={`flex-1 py-2 px-4 border-2 text-sm font-semibold uppercase tracking-wide transition ${
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
                  className={`flex-1 py-2 px-4 border-2 text-sm font-semibold uppercase tracking-wide transition ${
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
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between items-center mb-2">
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

              {/* Continue Shopping Button */}
              <Link
                href="/"
                className="block w-full text-center py-3 px-6 border-2 border-gray-800 text-gray-800 font-semibold uppercase tracking-wide hover:bg-gray-100 transition mb-6"
              >
                CONTINUE SHOPPING
              </Link>

              {/* Delivery Method */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-gray-900">
                  SELECT YOUR DELIVERY METHOD
                </h4>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedDeliveryMethod("delivery")}
                    className={`w-full flex items-center gap-3 py-4 px-4 border-2 text-left transition ${
                      selectedDeliveryMethod === "delivery"
                        ? "border-gray-800 bg-gray-50"
                        : "border-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faTruck}
                      className={`${
                        selectedDeliveryMethod === "delivery"
                          ? "text-gray-800"
                          : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`font-semibold uppercase tracking-wide ${
                        selectedDeliveryMethod === "delivery"
                          ? "text-gray-800"
                          : "text-gray-700"
                      }`}
                    >
                      Local Delivery
                    </span>
                  </button>
                  <button
                    onClick={() => setSelectedDeliveryMethod("pickup")}
                    className={`w-full flex items-center gap-3 py-4 px-4 border-2 text-left transition ${
                      selectedDeliveryMethod === "pickup"
                        ? "border-gray-800 bg-gray-50"
                        : "border-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faStore}
                      className={`${
                        selectedDeliveryMethod === "pickup"
                          ? "text-gray-800"
                          : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`font-semibold uppercase tracking-wide ${
                        selectedDeliveryMethod === "pickup"
                          ? "text-gray-800"
                          : "text-gray-700"
                      }`}
                    >
                      Pickup
                    </span>
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-gray-800 text-white py-4 px-6 font-semibold uppercase tracking-wide hover:bg-gray-900 transition">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
