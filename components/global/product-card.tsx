"use client";

import { Product } from "@/data/products";
import { addToCart } from "@/lib/cart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  colorCount?: number;
  index?: number;
}

export default function ProductCard({ product, colorCount, index = 99 }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const displayPrice = product.salePrice || product.price;
  const hasSale = !!product.salePrice;

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: displayPrice,
      quantity,
      image: product.images[0] || "/images/categories/celebrations.webp",
      slug: product.slug,
    };

    addToCart(cartItem);

    // Reset quantity after adding to cart
    setQuantity(1);
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
            src={product.images[0] || "/images/categories/celebrations.webp"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
          />
        </div>

        {/* Product Info - Always visible */}
        <div className="p-3 bg-[#f9f3f1]">
          {/* Price */}
          <div className="mb-1">
            <span className="text-2xl font-semibold text-black">
              ${displayPrice.toFixed(2)}
            </span>
            {hasSale && (
              <span className="ml-2 text-lg text-gray-900 line-through">
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
