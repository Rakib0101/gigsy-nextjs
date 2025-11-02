"use client";

import {
  getCart,
  getCartTotal,
  updateCartItemQuantity,
  type CartItem,
} from "@/lib/cart";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  // Form state
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [shippingInfo, setShippingInfo] = useState({
    useBillingAddress: true,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    const loadCart = () => {
      const items = getCart();
      setCartItems(items);
      if (items.length === 0) {
        router.push("/cart");
      }
    };

    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, [router]);

  const handleQuantityChange = (itemId: string, change: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  const handleBillingChange = (field: string, value: string) => {
    setBillingInfo((prev) => ({ ...prev, [field]: value }));
    if (shippingInfo.useBillingAddress) {
      setShippingInfo((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleShippingChange = (field: string, value: string) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const subtotal = getCartTotal();
  const shipping = 0; // Can be calculated based on address
  const tax = subtotal * 0.08; // 8% tax (adjust as needed)
  const total = subtotal + shipping + tax;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return null; // Will redirect to cart
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Checkout
          </h1>
          <p className="text-gray-600 uppercase tracking-wide text-sm">
            {totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cart Items Summary */}
            <div className="bg-[#f9f3f1] rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Order Summary
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                    <Link
                      href={`/${item.slug}`}
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
                        className="block mb-1 hover:text-gray-600 transition"
                      >
                        <h3
                          className="text-lg font-semibold text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.name || "Product"}
                        </h3>
                      </Link>
                      {item.number && (
                        <p className="text-sm text-gray-600 mb-1">
                          Number: {item.number}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-base font-semibold text-gray-900">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="px-2 py-1 text-gray-700 hover:bg-gray-100 transition"
                            type="button"
                          >
                            <FontAwesomeIcon icon={faMinus} className="text-xs" />
                          </button>
                          <span className="px-3 py-1 text-sm font-semibold min-w-[2rem] text-center border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="px-2 py-1 text-gray-700 hover:bg-gray-100 transition"
                            type="button"
                          >
                            <FontAwesomeIcon icon={faPlus} className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-[#f9f3f1] rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Billing Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="billing-firstName"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="billing-firstName"
                    value={billingInfo.firstName}
                    onChange={(e) => handleBillingChange("firstName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="billing-lastName"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="billing-lastName"
                    value={billingInfo.lastName}
                    onChange={(e) => handleBillingChange("lastName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="billing-email"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="billing-email"
                    value={billingInfo.email}
                    onChange={(e) => handleBillingChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="billing-phone"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    PHONE
                  </label>
                  <input
                    type="tel"
                    id="billing-phone"
                    value={billingInfo.phone}
                    onChange={(e) => handleBillingChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="billing-address"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    id="billing-address"
                    value={billingInfo.address}
                    onChange={(e) => handleBillingChange("address", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="billing-city"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    CITY
                  </label>
                  <input
                    type="text"
                    id="billing-city"
                    value={billingInfo.city}
                    onChange={(e) => handleBillingChange("city", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="billing-state"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    STATE
                  </label>
                  <input
                    type="text"
                    id="billing-state"
                    value={billingInfo.state}
                    onChange={(e) => handleBillingChange("state", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="billing-zipCode"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    ZIP CODE
                  </label>
                  <input
                    type="text"
                    id="billing-zipCode"
                    value={billingInfo.zipCode}
                    onChange={(e) => handleBillingChange("zipCode", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="billing-country"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    COUNTRY
                  </label>
                  <input
                    type="text"
                    id="billing-country"
                    value={billingInfo.country}
                    onChange={(e) => handleBillingChange("country", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-[#f9f3f1] rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Shipping Information
              </h2>
              <label className="flex items-center gap-3 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shippingInfo.useBillingAddress}
                  onChange={(e) =>
                    setShippingInfo((prev) => ({
                      ...prev,
                      useBillingAddress: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-gray-400 cursor-pointer"
                />
                <span
                  className="text-sm text-gray-700 uppercase tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  SAME AS BILLING ADDRESS
                </span>
              </label>
              {!shippingInfo.useBillingAddress && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="shipping-firstName"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      id="shipping-firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) =>
                        handleShippingChange("firstName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shipping-lastName"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      id="shipping-lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) =>
                        handleShippingChange("lastName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="shipping-address"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      ADDRESS
                    </label>
                    <input
                      type="text"
                      id="shipping-address"
                      value={shippingInfo.address}
                      onChange={(e) =>
                        handleShippingChange("address", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shipping-city"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      CITY
                    </label>
                    <input
                      type="text"
                      id="shipping-city"
                      value={shippingInfo.city}
                      onChange={(e) =>
                        handleShippingChange("city", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shipping-state"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      STATE
                    </label>
                    <input
                      type="text"
                      id="shipping-state"
                      value={shippingInfo.state}
                      onChange={(e) =>
                        handleShippingChange("state", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="shipping-zipCode"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      ZIP CODE
                    </label>
                    <input
                      type="text"
                      id="shipping-zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) =>
                        handleShippingChange("zipCode", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Payment Information */}
            <div className="bg-[#f9f3f1] rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Payment Information
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="card-number"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="card-expiry"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      EXPIRY DATE
                    </label>
                    <input
                      type="text"
                      id="card-expiry"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="card-cvv"
                      className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="card-cvv"
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="card-name"
                    className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    CARDHOLDER NAME
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#f9f3f1] rounded-lg p-6 sticky top-32">
              <h2
                className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="text-gray-900 font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Shipping</span>
                  <span className="text-gray-900 font-semibold">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Tax</span>
                  <span className="text-gray-900 font-semibold">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between">
                    <span
                      className="text-lg font-bold text-gray-900 uppercase tracking-wide"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Total
                    </span>
                    <span
                      className="text-lg font-bold text-gray-900"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/cart"
                className="block w-full text-center py-3 px-6 border-2 border-gray-800 text-gray-800 font-semibold uppercase tracking-wide hover:bg-gray-100 transition mb-4"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                BACK TO CART
              </Link>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-4 px-6 font-semibold uppercase tracking-wide hover:bg-gray-900 transition"
                style={{ fontFamily: "'Lato', sans-serif" }}
                onClick={(e) => {
                  e.preventDefault();
                  // Handle checkout submission
                  console.log("Checkout submitted", {
                    cartItems,
                    billingInfo,
                    shippingInfo,
                    total,
                  });
                }}
              >
                COMPLETE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

