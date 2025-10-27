'use client'

import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
      document.getElementById('cartOverlay')?.classList.add('active')
    } else {
      document.body.classList.remove('no-scroll')
      document.getElementById('cartOverlay')?.classList.remove('active')
    }
  }, [isOpen])

  const cartItems: any[] = [] // Load from localStorage or API

  return (
    <>
      <div className="overlay fixed top-0 left-0 w-full h-full bg-black/50 hidden z-[9998] cursor-pointer" id="cartOverlay" onClick={onClose}></div>

      <div className={`cart-drawer fixed top-0 -right-[400px] w-[400px] h-full bg-white shadow-[-2px_0_10px_rgba(0,0,0,0.1)] z-[9999] overflow-y-auto ${isOpen ? 'right-0' : ''}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h4 className="m-0 text-lg font-bold">Your Cart</h4>
          <button className="bg-transparent border-none text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-5">
          {cartItems.length > 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <FontAwesomeIcon icon={['far', 'shopping-bag']} className="text-5xl text-gray-400 mb-3" />
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

