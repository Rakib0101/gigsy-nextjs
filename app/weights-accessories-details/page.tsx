"use client";

import ProductCard from "@/components/global/product-card";
import { getFeaturedProducts, products } from "@/data/products";
import { addToCart } from "@/lib/cart";
import {
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define color options for Balloon Weights
const colorOptions = [
  {
    name: "Gold",
    slug: "gold",
    image: "/images/products/weights-accessories/gold.webp",
  },
  {
    name: "Silver",
    slug: "silver",
    image: "/images/products/weights-accessories/silver.webp",
  },
  {
    name: "Rose Gold",
    slug: "rose-gold",
    image: "/images/products/weights-accessories/rose-gold.webp",
  },
  {
    name: "Light Purple",
    slug: "purple",
    image: "/images/products/weights-accessories/purple.webp",
  },
  {
    name: "Hot Pink",
    slug: "hot-pink",
    image: "/images/products/weights-accessories/hot-pink.webp",
  },
  {
    name: "Red",
    slug: "red",
    image: "/images/products/weights-accessories/red.webp",
  },
  {
    name: "Orange",
    slug: "orange",
    image: "/images/products/weights-accessories/orange.webp",
  },
  {
    name: "Lime Green",
    slug: "green",
    image: "/images/products/weights-accessories/green.webp",
  },
  {
    name: "Royal Blue",
    slug: "blue",
    image: "/images/products/weights-accessories/blue.webp",
  },
  {
    name: "Light Blue",
    slug: "light-blue",
    image: "/images/products/weights-accessories/light-blue.webp",
  },
  {
    name: "Dark Purple",
    slug: "purple",
    image: "/images/products/weights-accessories/purple.webp",
  },
  {
    name: "Black",
    slug: "black",
    image: "/images/products/weights-accessories/black.webp",
  },
  {
    name: "Light Pink",
    slug: "pink",
    image: "/images/products/weights-accessories/pink.webp",
  },
  {
    name: "White",
    slug: "white",
    image: "/images/products/weights-accessories/white.webp",
  },
];

const ProductDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get related products - featured products or first 3 products
  const relatedProducts =
    getFeaturedProducts().slice(0, 3).length > 0
      ? getFeaturedProducts().slice(0, 3)
      : products.slice(0, 3);

  const productName = "Balloon Weights";
  const productPrice = 5.0;
  const productDescription =
    "Keep your party balloons grounded with our stylish and sturdy balloon weights, designed to complement any theme or occasion. These weights effortlessly secure your balloons in place, adding a touch of elegance while ensuring your decorations stay put.";

  const handleAddToCart = () => {
    const cartItem = {
      id: `balloon-weights-${selectedColor.slug}`,
      name: `${productName} (${selectedColor.name})`,
      price: productPrice,
      quantity,
      image: selectedColor.image,
      slug: "weights-accessories-details",
      color: selectedColor.name,
    };

    addToCart(cartItem);

    // Show success message (optional - could add toast notification)
    alert("Added to cart!");
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % colorOptions.length);
    setSelectedColor(
      colorOptions[(currentImageIndex + 1) % colorOptions.length]
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + colorOptions.length) % colorOptions.length
    );
    setSelectedColor(
      colorOptions[
        (currentImageIndex - 1 + colorOptions.length) % colorOptions.length
      ]
    );
  };

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href="/collections/weights-accessories"
              className="hover:text-gray-900 transition uppercase tracking-wide"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              WEIGHTS & ACCESSORIES
            </Link>
            <span className="text-gray-400">/</span>
            <span
              className="text-gray-900 uppercase tracking-wide"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              BALLOON WEIGHTS
            </span>
          </div>
        </div>

        {/* Product Display Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Product Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-4">
              <Image
                src={selectedColor.image}
                alt={`${productName} - ${selectedColor.name}`}
                fill
                className="object-contain p-4"
                priority
              />
              {/* Image Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                aria-label="Previous image"
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-gray-800"
                />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                aria-label="Next image"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-gray-800"
                />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-7 gap-2">
              {colorOptions.map((color, index) => (
                <button
                  key={color.slug + index}
                  onClick={() => {
                    setSelectedColor(color);
                    setCurrentImageIndex(index);
                  }}
                  className={`relative aspect-square rounded overflow-hidden border-2 transition ${
                    selectedColor.slug === color.slug &&
                    selectedColor.name === color.name
                      ? "border-gray-900"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={color.image}
                    alt={color.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Information */}
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {productName}
            </h1>

            <div className="mb-6">
              <span className="text-3xl font-semibold text-gray-900">
                ${productPrice.toFixed(2)}
              </span>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <label
                className="block text-sm font-semibold uppercase tracking-wide mb-3 text-gray-900"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                COLOR: {selectedColor.name.toUpperCase()}
              </label>
              <div className="grid grid-cols-7 gap-2">
                {colorOptions.map((color, index) => (
                  <button
                    key={color.slug + index}
                    onClick={() => {
                      setSelectedColor(color);
                      setCurrentImageIndex(index);
                    }}
                    className={`relative aspect-square rounded overflow-hidden border-2 transition ${
                      selectedColor.slug === color.slug &&
                      selectedColor.name === color.name
                        ? "border-gray-900 ring-2 ring-gray-900"
                        : "border-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <Image
                      src={color.image}
                      alt={color.name}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label
                className="block text-sm font-semibold uppercase tracking-wide mb-3 text-gray-900"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                QUANTITY
              </label>
              <div className="flex items-center gap-4 max-w-[200px]">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-2 border border-gray-800 bg-white hover:bg-gray-100 transition font-semibold text-gray-900"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityInput}
                  className="flex-1 text-center px-4 py-2 border border-gray-800 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-2 border border-gray-800 bg-white hover:bg-gray-100 transition font-semibold text-gray-900"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-800 text-white py-4 px-6 mb-8 hover:bg-gray-900 transition font-semibold uppercase tracking-wide flex items-center justify-center gap-2"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              ADD TO CART
            </button>

            {/* Pickup Information */}
            <div className="bg-white p-4 rounded border border-gray-200 mb-8">
              <div className="flex items-start gap-3 mb-2">
                <svg
                  className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p
                    className="font-semibold text-gray-900 mb-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    PICKUP AVAILABLE AT TRIBECA, NYC
                  </p>
                  <p
                    className="text-sm text-gray-600 mb-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Ready in about 2 hours
                  </p>
                  <button
                    className="text-sm text-gray-900 underline hover:text-gray-600 transition"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    View store information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-12">
          <h2
            className="text-2xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Product Description:
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {productDescription}
          </p>
        </div>

        {/* Products Warning and Disclaimer */}
        <div className="mb-12">
          <h2
            className="text-2xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            PRODUCTS WARNING AND DISCLAIMER
          </h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="Share on Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="Share on Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="Share on Pinterest"
            >
              <FontAwesomeIcon icon={faPinterest} className="text-2xl" />
            </a>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-8 text-center text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            YOU MIGHT ALSO LIKE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} colorCount={12} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
