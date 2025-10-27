import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faBox, faGift, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <FontAwesomeIcon icon={faTruck} className="text-3xl text-[#ff6b6b] mb-3" />
            <h6 className="font-bold mb-2">SAME DAY DELIVERY IN NYC</h6>
            <p className="text-gray-400 text-sm">Get your balloons delivered the same day you order them.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBox} className="text-3xl text-[#4ecdc4] mb-3" />
            <h6 className="font-bold mb-2">PICK UP AVAILABLE</h6>
            <p className="text-gray-400 text-sm">Visit our showroom and pick up your order at your convenience.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGift} className="text-3xl text-[#45b7d1] mb-3" />
            <h6 className="font-bold mb-2">CURATED ASSORTMENTS</h6>
            <p className="text-gray-400 text-sm">Our team selects the perfect balloons for every occasion.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeadset} className="text-3xl text-[#ff6b6b] mb-3" />
            <h6 className="font-bold mb-2">WORLD-CLASS SUPPORT</h6>
            <p className="text-gray-400 text-sm">Our friendly team is here to help with every order.</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <h6 className="font-bold text-center mb-4">GET OUR NEWSLETTER</h6>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 text-gray-800 rounded-l" />
            <button className="bg-[#ff6b6b] hover:bg-[#ff5252] px-6 py-2 rounded-r font-semibold transition">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Navigation and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h6 className="font-bold mb-4">NAVIGATE</h6>
            <ul className="list-none p-0 m-0 text-gray-400">
              <li className="mb-2"><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li className="mb-2"><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-4">SHOP</h6>
            <ul className="list-none p-0 m-0 text-gray-400">
              <li className="mb-2"><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
              <li className="mb-2"><Link href="/products?filter=best-sellers" className="hover:text-white transition">Best Sellers</Link></li>
              <li className="mb-2"><Link href="/products?filter=new-arrivals" className="hover:text-white transition">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-4">NEED HELP?</h6>
            <p className="text-gray-400 mb-2">(555) 123-4567</p>
            <p className="text-gray-400">123 Balloon St, Party City, NY 10001</p>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition"><FontAwesomeIcon icon={faPinterest} /></a>
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} JIGSY. All rights reserved.</p>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center gap-4">
          <i className="fab fa-cc-visa text-3xl text-gray-400"></i>
          <i className="fab fa-cc-mastercard text-3xl text-gray-400"></i>
          <i className="fab fa-cc-amex text-3xl text-gray-400"></i>
          <i className="fab fa-cc-discover text-3xl text-gray-400"></i>
          <i className="fab fa-cc-paypal text-3xl text-gray-400"></i>
        </div>
      </div>
    </footer>
  )
}

