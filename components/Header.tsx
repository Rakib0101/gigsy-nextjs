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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<
    string | null
  >(null);
  const [cartItems, setCartItems] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Load cart items from localStorage
    const loadCart = () => {
      if (typeof window !== "undefined") {
        const cart = localStorage.getItem("cart");
        if (cart) {
          const cartItems = JSON.parse(cart);
          const totalQuantity = cartItems.reduce(
            (sum: number, item: any) => sum + (item.quantity || 1),
            0
          );
          setCartItems(totalQuantity);
        } else {
          setCartItems(0);
        }
      }
    };

    loadCart();

    // Listen for cart updates
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileCategory = (category: string) => {
    setExpandedMobileCategory(
      expandedMobileCategory === category ? null : category
    );
  };

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
        className={`fixed left-0 right-0 z-[9999] bg-white backdrop-blur-sm transition-all duration-300 ${
          isScrolledUp ? "top-[41px]" : "top-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Hamburger Menu - Mobile */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center text-gray-800 hover:text-gray-600 transition"
                aria-label="Toggle menu"
              >
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* User Icon - Desktop */}
            <div className="hidden lg:flex items-center">
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

            {/* Logo - Centered */}
            <div className="flex items-center justify-center flex-1 lg:flex-initial">
              <Link
                href="/"
                className="text-3xl lg:text-4xl font-bold text-[#ff0099] hover:text-[#ff0099] no-underline tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="gigs"
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/* Search & Cart */}
            <div className="flex items-center justify-end gap-4">
              {/* Search Icon - Mobile shows icon only, Desktop shows icon + text */}
              <Link
                href="#"
                className="flex gap-1 items-center text-gray-800 hover:text-gray-600 transition no-underline"
              >
                <svg
                  className="size-6 lg:size-[25px]"
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
                <span className="hidden lg:inline text-lg font-bold tracking-wide uppercase">
                  SEARCH
                </span>
              </Link>
              <button
                className="relative inline-block cursor-pointer"
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping cart"
              >
                <svg
                  className="size-6 lg:size-[25px]"
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
                  <span className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 bg-gray-800 text-white rounded px-1.5 py-0.5 text-[10px] lg:text-[11px] font-bold min-w-[18px] lg:min-w-[20px] text-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
          {/* Navigation - Desktop */}
          <nav className="hidden lg:block border-t border-gray-200 pt-4 mt-4">
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
                  href="/collections"
                  className={`inline-block text-gray-700 no-underline text-lg font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition ${
                    pathname?.startsWith("/collections")
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
                                href={`${item.slug}`}
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
                                href={`${item.slug}`}
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
                                href={`${item.slug}`}
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
                                href={`${item.slug}`}
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
                                href={`${item.slug}`}
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
                                href={`${item.slug}`}
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
                                href={`${item.slug}`}
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
                  href="/collections/weights-accessories"
                  className={`inline-block text-gray-700 no-underline text-lg font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition ${
                    pathname?.startsWith("/collections/weights-accessories")
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

      {/* Mobile Menu Drawer */}
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[10001] transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[10002] shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-[#ff0099] no-underline tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <Image
                src="/images/logo.png"
                alt="gigs"
                width={80}
                height={80}
                className="w-16 h-auto md:w-20"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 hover:text-gray-600 transition"
              aria-label="Close menu"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav>
            <ul className="flex flex-col gap-0 list-none m-0">
              <li className="border-b border-gray-100">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 text-gray-700 no-underline text-base font-semibold tracking-wide uppercase hover:text-gray-900 transition ${
                    pathname === "/" ? "text-gray-900" : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  HOME
                </Link>
              </li>

              {/* Shop Balloons with Expandable Mega Menu */}
              <li className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileCategory("shop")}
                  className={`w-full flex items-center justify-between py-4 text-gray-700 no-underline text-base font-semibold tracking-wide uppercase hover:text-gray-900 transition ${
                    pathname?.startsWith("/collections") ? "text-gray-900" : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <span>SHOP BALLOONS</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedMobileCategory === "shop"
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mega Menu Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedMobileCategory === "shop"
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-4 pl-4 space-y-6">
                    {/* By Type */}
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("byType")}
                        className="w-full flex items-center justify-between mb-3 text-sm font-bold uppercase tracking-wide text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        By Type
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            expandedMobileCategory === "byType"
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMobileCategory === "byType"
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="list-none p-0 m-0 space-y-2">
                          {categoryData.byType.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`${item.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{
                                  fontFamily: "'Lato', sans-serif",
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* By Occasion */}
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("byOccasion")}
                        className="w-full flex items-center justify-between mb-3 text-sm font-bold uppercase tracking-wide text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        By Occasion
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            expandedMobileCategory === "byOccasion"
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMobileCategory === "byOccasion"
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="list-none p-0 m-0 space-y-2">
                          {categoryData.byOccasion.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`${item.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{
                                  fontFamily: "'Lato', sans-serif",
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* By Color */}
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("byColor")}
                        className="w-full flex items-center justify-between mb-3 text-sm font-bold uppercase tracking-wide text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        By Color
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            expandedMobileCategory === "byColor"
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMobileCategory === "byColor"
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="list-none p-0 m-0 space-y-2">
                          {categoryData.byColor.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`${item.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{
                                  fontFamily: "'Lato', sans-serif",
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* By Shape */}
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("byShape")}
                        className="w-full flex items-center justify-between mb-3 text-sm font-bold uppercase tracking-wide text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        By Shape
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            expandedMobileCategory === "byShape"
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMobileCategory === "byShape"
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="list-none p-0 m-0 space-y-2">
                          {categoryData.byShape.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`${item.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{
                                  fontFamily: "'Lato', sans-serif",
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* By Holiday */}
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("byHoliday")}
                        className="w-full flex items-center justify-between mb-3 text-sm font-bold uppercase tracking-wide text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        By Holiday
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            expandedMobileCategory === "byHoliday"
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMobileCategory === "byHoliday"
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="list-none p-0 m-0 space-y-2">
                          {categoryData.byHoliday.map((item) => (
                            <li key={item.slug}>
                              <Link
                                href={`${item.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                style={{
                                  fontFamily: "'Lato', sans-serif",
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* By Theme */}
                    <div>
                      <button
                        onClick={() => toggleMobileCategory("byTheme")}
                        className="w-full flex items-center justify-between mb-3 text-sm font-bold uppercase tracking-wide text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        By Theme
                        <svg
                          className={`w-3 h-3 transition-transform duration-200 ${
                            expandedMobileCategory === "byTheme"
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMobileCategory === "byTheme"
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-4">
                          <div>
                            <h6
                              className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                              }}
                            >
                              Classic Themes
                            </h6>
                            <ul className="list-none p-0 m-0 space-y-2">
                              {categoryData.byTheme.classic.map((item) => (
                                <li key={item.slug}>
                                  <Link
                                    href={`${item.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                    style={{
                                      fontFamily: "'Lato', sans-serif",
                                    }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6
                              className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-700"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                              }}
                            >
                              Licensed Themes
                            </h6>
                            <ul className="list-none p-0 m-0 space-y-2">
                              {categoryData.byTheme.licensed.map((item) => (
                                <li key={item.slug}>
                                  <Link
                                    href={`${item.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-gray-600 no-underline text-sm uppercase font-normal hover:text-[#ff6b6b] transition"
                                    style={{
                                      fontFamily: "'Lato', sans-serif",
                                    }}
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
                  </div>
                </div>
              </li>

              <li className="border-b border-gray-100">
                <Link
                  href="/collections/weights-accessories"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 text-gray-700 no-underline text-base font-semibold tracking-wide uppercase hover:text-gray-900 transition ${
                    pathname?.startsWith("/collections/weights-accessories")
                      ? "text-gray-900"
                      : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  WEIGHTS & ACCESSORIES
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 text-gray-700 no-underline text-base font-semibold tracking-wide uppercase hover:text-gray-900 transition ${
                    pathname?.startsWith("/contact") ? "text-gray-900" : ""
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
