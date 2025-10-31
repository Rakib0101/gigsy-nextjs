"use client";

import { categoryData } from "@/data/categories";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Load cart items from localStorage or API
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart).length);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling up or at top, show header
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsScrolledUp(true);
      } else if (currentScrollY > lastScrollY) {
        // If scrolling down and past a threshold, hide header
        setIsScrolledUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header Top Bar - Fixed at top */}
      <div
        className={`fixed top-0 left-0 right-0 z-[10000] bg-[#3a3a3e] text-white py-2 text-center text-lg font-bold transition-transform duration-300 ${
          isScrolledUp ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <div className="container mx-auto px-4">
          Balloons delivered straight to your door
        </div>
      </div>

      {/* Main Header - Fixed below topbar */}
      <header
        className={`fixed left-0 right-0 z-[9999] bg-white backdrop-blur-sm pt-5 transition-all duration-300 ${
          isScrolledUp ? "top-[41px]" : "top-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center">
            {/* User Icon */}
            <div className="flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-gray-800 hover:text-gray-600 transition"
              >
                <svg
                  className="size-[25px]"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fat"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM16 482.3c0 7.6 6.1 13.7 13.7 13.7H418.3c7.6 0 13.7-6.1 13.7-13.7C432 392.7 359.3 320 269.7 320H178.3C88.7 320 16 392.7 16 482.3zm-16 0C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="text-4xl font-bold text-[#ff1493] hover:text-[#ff1493] no-underline tracking-wider"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="JIGSY"
                  width={103}
                  height={103}
                  className="aspect-square h-[103px] w-[103px] object-cover"
                />
              </Link>
            </div>

            {/* Search & Cart */}
            <div className="flex items-center justify-end gap-4">
              <Link
                href="#"
                className="flex gap-1 items-center text-lg text-gray-800 hover:text-gray-600 transition no-underline"
              >
                <svg
                  className="size-[25px]"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fat"
                  data-icon="magnifying-glass"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M400 208A192 192 0 1 0 16 208a192 192 0 1 0 384 0zM349.3 360.6C312.2 395 262.6 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 54.6-21 104.2-55.4 141.3l149 149c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-149-149z"
                  ></path>
                </svg>
                <span className="text-lg font-bold tracking-wide uppercase">
                  SEARCH
                </span>
              </Link>
              <button
                className="relative inline-block cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              >
                <svg
                  className="size-[25px]"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fat"
                  data-icon="bag-shopping"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M144 96v32H304V96c0-44.2-35.8-80-80-80s-80 35.8-80 80zm-16 48H48c-17.7 0-32 14.3-32 32V416c0 44.2 35.8 80 80 80H352c44.2 0 80-35.8 80-80V176c0-17.7-14.3-32-32-32H320v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V144H144v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V144zm0-16V96c0-53 43-96 96-96s96 43 96 96v32h80c26.5 0 48 21.5 48 48V416c0 53-43 96-96 96H96c-53 0-96-43-96-96V176c0-26.5 21.5-48 48-48h80z"
                  ></path>
                </svg>
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gray-600 text-white rounded px-1.5 py-0.5 text-[11px] font-bold min-w-[20px] text-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-gray-200 pt-4 mt-4">
            <ul className="flex justify-center gap-8 list-none m-0">
              <li className="relative">
                <Link
                  href="/"
                  className={`inline-block text-gray-700 no-underline text-lg font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition ${
                    pathname === "/" ? "border-b-2 border-gray-900" : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  HOME
                </Link>
              </li>
              <li
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <Link
                  href="/shop"
                  className={`inline-block text-gray-700 no-underline text-lg font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition ${
                    pathname?.startsWith("/shop")
                      ? "border-b-2 border-gray-900"
                      : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  SHOP BALLOONS{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[10px] nav-link-icon"
                  />
                </Link>
                <div
                  className={`mega-menu absolute top-full left-0 w-full bg-white shadow-lg py-8 px-8 z-[1000] pt-12 ${
                    isMegaMenuOpen ? "active" : ""
                  }`}
                >
                  <div className="container mx-auto">
                    <div className="grid grid-cols-6 gap-6">
                      {/* By Type */}
                      <div>
                        <h6
                          className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          By Type
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byType.map((item) => (
                            <li key={item.slug} className="mb-0.5">
                              <Link
                                href={`/categories/type/${item.slug}`}
                                className="text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Occasion */}
                      <div>
                        <h6
                          className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          By Occasion
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byOccasion.map((item) => (
                            <li key={item.slug} className="mb-0.5">
                              <Link
                                href={`/categories/occasion/${item.slug}`}
                                className="text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Color */}
                      <div>
                        <h6
                          className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          By Color
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byColor.map((item) => (
                            <li key={item.slug} className="mb-0.5">
                              <Link
                                href={`/categories/color/${item.slug}`}
                                className="text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Shape */}
                      <div>
                        <h6
                          className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          By Shape
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byShape.map((item) => (
                            <li key={item.slug} className="mb-0.5">
                              <Link
                                href={`/categories/shape/${item.slug}`}
                                className="text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Holiday */}
                      <div>
                        <h6
                          className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          By Holiday
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byHoliday.map((item) => (
                            <li key={item.slug} className="mb-0.5">
                              <Link
                                href={`/categories/holiday/${item.slug}`}
                                className="text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Theme */}
                      <div>
                        <h6
                          className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          By Theme
                        </h6>
                        <h6
                          className="font-semibold text-[11px] uppercase tracking-wide mb-3 text-gray-700 mt-4"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Classic Themes
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byTheme.classic.map((item) => (
                            <li key={item.slug} className="mb-0.5">
                              <Link
                                href={`/categories/theme/classic/${item.slug}`}
                                className="text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <h6
                          className="font-semibold text-[11px] uppercase tracking-wide mb-3 text-gray-700 mt-4"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          Licensed Themes
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byTheme.licensed.map((item) => (
                            <li key={item.slug} className="mb-0.5">
                              <Link
                                href={`/categories/theme/licensed/${item.slug}`}
                                className="text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative">
                <Link
                  href="/weights-accessories"
                  className={`inline-block text-gray-700 no-underline text-lg font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition ${
                    pathname?.startsWith("/weights-accessories")
                      ? "border-b-2 border-gray-900"
                      : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  WEIGHTS & ACCESSORIES
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/contact"
                  className={`inline-block text-gray-700 no-underline text-lg font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition ${
                    pathname?.startsWith("/contact")
                      ? "border-b-2 border-gray-900"
                      : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
