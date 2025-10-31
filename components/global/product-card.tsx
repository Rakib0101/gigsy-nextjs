"use client";

import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  colorCount?: number; // Optional: number of available colors (e.g., "14 COLORS")
}

export default function ProductCard({ product, colorCount }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const displayPrice = product.salePrice || product.price;
  const hasSale = !!product.salePrice;

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log("Adding to cart:", { product: product.id, quantity });

    // Load existing cart from localStorage
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];

    // Add item to cart
    const cartItem = {
      id: product.id,
      name: product.name,
      price: displayPrice,
      quantity,
      image: product.images[0],
      slug: product.slug,
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Trigger cart update event (for Header to update cart count)
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  return (
    <Link
      href={`/${product.slug}`}
      className="group relative bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`transition-all duration-300 rounded-xl overflow-hidden ${
          isHovered ? "shadow-lg" : ""
        }`}
      >
        {/* Product Image */}
        <div className="relative aspect-square w-full bg-white overflow-hidden">
          <Image
            src={product.images[0] || "/images/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>

        {/* Product Info - Always visible */}
        <div className="p-3 bg-[#f9f3f1]">
          {/* Price */}
          <div className="mb-1">
            <span className="text-base font-semibold text-gray-900">
              ${displayPrice.toFixed(2)}
            </span>
            {hasSale && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Color Availability (optional) */}
          {colorCount && (
            <p className="text-xs text-gray-600 uppercase tracking-wide">
              {colorCount} COLORS
            </p>
          )}
        </div>

        {/* Hover State - Add to Cart Interface */}
        <div
          className={`px-3 py-2 transition-all duration-300 ${
            isHovered
              ? "opacity-100 max-h-[200px] mt-3"
              : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
          }`}
        >
          <div className="flex items-end gap-3 pb-1">
            {/* Quantity - Left Side */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-1.5 uppercase tracking-wide">
                QUANTITY
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              />
            </div>

            {/* Add to Cart Button - Right Side */}
            <div className="flex-shrink-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddToCart();
                }}
                className="bg-gray-800 text-white py-2.5 px-6 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors duration-200 whitespace-nowrap"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
