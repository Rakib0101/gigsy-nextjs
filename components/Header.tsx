'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faShoppingBag, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import CartDrawer from './CartDrawer'
import Image from 'next/image'
import { categoryData } from '@/data/categories'

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    // Load cart items from localStorage or API
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCartItems(JSON.parse(cart).length)
    }
  }, [])

  return (
    <>
      {/* Header Top Bar */}
      <div className="bg-gray-800 text-white py-2 text-center text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
        <div className="container mx-auto px-4">
          Balloons delivered straight to your door
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center">
            {/* User Icon */}
            <div className="flex items-center">
              <Link href="/" className="inline-flex items-center text-gray-800 hover:text-gray-600 transition">
                <svg className="svg-inline--fa fa-user icon size-[25px]" aria-hidden="true" focusable="false" data-prefix="fat" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM16 482.3c0 7.6 6.1 13.7 13.7 13.7H418.3c7.6 0 13.7-6.1 13.7-13.7C432 392.7 359.3 320 269.7 320H178.3C88.7 320 16 392.7 16 482.3zm-16 0C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path></svg>
              </Link>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center">
              <Link href="/" className="text-4xl font-bold text-[#ff1493] hover:text-[#ff1493] no-underline tracking-wider" style={{ fontFamily: "'Lato', sans-serif" }}>
                <Image src="/images/logo.avif" alt="JIGSY" width={250} height={80} />
              </Link>
            </div>

            {/* Search & Cart */}
            <div className="flex items-center justify-end gap-4">
              <Link href="#" className="flex items-center text-lg text-gray-800 hover:text-gray-600 transition no-underline">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                <span className="text-xs font-semibold tracking-wide uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>SEARCH</span>
              </Link>
              <button className="relative inline-block cursor-pointer" onClick={() => setIsCartOpen(true)}>
                <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-800" />
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
            <ul className="flex justify-center gap-8 list-none m-0 p-0">
              <li className="relative">
                <Link href="/" className="text-gray-700 no-underline text-sm font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition" style={{ fontFamily: "'Playfair Display', serif" }}>
                  HOME
                </Link>
              </li>
              <li className="relative" onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)}>
                <Link href="/shop" className="text-gray-700 no-underline text-sm font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition" style={{ fontFamily: "'Playfair Display', serif" }}>
                  SHOP BALLOONS <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                </Link>
                <div className={`mega-menu absolute top-full left-0 w-full bg-white shadow-lg py-8 px-8 z-[1000] mt-2.5 ${isMegaMenuOpen ? 'active' : ''}`}>
                  <div className="container mx-auto">
                    <div className="grid grid-cols-6 gap-6">
                      {/* By Type */}
                      <div>
                        <h6 className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          By Type
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byType.map((item, index) => (
                            <li key={index} className="mb-3 group">
                              <Link 
                                href={`/categories/type/${item.slug}`} 
                                className="flex items-center gap-2 text-gray-600 no-underline text-sm capitalize font-normal hover:text-[#ff6b6b] transition group" 
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Occasion */}
                      <div>
                        <h6 className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          By Occasion
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byOccasion.map((item, index) => (
                            <li key={index} className="mb-3 group">
                              <Link 
                                href={`/categories/occasion/${item.slug}`} 
                                className="flex items-center gap-2 text-gray-600 no-underline text-sm capitalize font-normal hover:text-[#ff6b6b] transition group" 
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Color */}
                      <div>
                        <h6 className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          By Color
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byColor.map((item, index) => (
                            <li key={index} className="mb-3 group">
                              <Link 
                                href={`/categories/color/${item.slug}`} 
                                className="flex items-center gap-2 text-gray-600 no-underline text-sm capitalize font-normal hover:text-[#ff6b6b] transition group" 
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Shape */}
                      <div>
                        <h6 className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          By Shape
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byShape.map((item, index) => (
                            <li key={index} className="mb-3 group">
                              <Link 
                                href={`/categories/shape/${item.slug}`} 
                                className="flex items-center gap-2 text-gray-600 no-underline text-sm capitalize font-normal hover:text-[#ff6b6b] transition group" 
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Holiday */}
                      <div>
                        <h6 className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          By Holiday
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byHoliday.map((item, index) => (
                            <li key={index} className="mb-3 group">
                              <Link 
                                href={`/categories/holiday/${item.slug}`} 
                                className="flex items-center gap-2 text-gray-600 no-underline text-sm capitalize font-normal hover:text-[#ff6b6b] transition group" 
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* By Theme */}
                      <div>
                        <h6 className="font-bold text-[13px] uppercase tracking-wide mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                          By Theme
                        </h6>
                        <h6 className="font-semibold text-[11px] uppercase tracking-wide mb-3 text-gray-700 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Classic Themes
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byTheme.classic.map((item, index) => (
                            <li key={index} className="mb-3 group">
                              <Link 
                                href={`/categories/theme/classic/${item.slug}`} 
                                className="flex items-center gap-2 text-gray-600 no-underline text-sm capitalize font-normal hover:text-[#ff6b6b] transition group" 
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <h6 className="font-semibold text-[11px] uppercase tracking-wide mb-3 text-gray-700 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                          Licensed Themes
                        </h6>
                        <ul className="list-none p-0 m-0">
                          {categoryData.byTheme.licensed.map((item, index) => (
                            <li key={index} className="mb-3 group">
                              <Link 
                                href={`/categories/theme/licensed/${item.slug}`} 
                                className="flex items-center gap-2 text-gray-600 no-underline text-sm capitalize font-normal hover:text-[#ff6b6b] transition group" 
                                style={{ fontFamily: "'Lato', sans-serif" }}
                              >
                                <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>{item.name}</span>
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
                <Link href="/weights-accessories" className="text-gray-700 no-underline text-sm font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition" style={{ fontFamily: "'Playfair Display', serif" }}>
                  WEIGHTS & ACCESSORIES
                </Link>
              </li>
              <li className="relative">
                <Link href="/contact" className="text-gray-700 no-underline text-sm font-semibold tracking-wide uppercase pb-1.5 relative hover:text-gray-900 transition" style={{ fontFamily: "'Playfair Display', serif" }}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

