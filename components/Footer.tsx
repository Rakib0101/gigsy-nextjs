import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#3a3a3e] text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Newsletter Signup */}
          <div className="mb-12">
            <h6 className="font-bold text-center mb-4 text-2xl md:text-3xl lg:text-4xl">
              GET OUR NEWSLETTER
            </h6>
            <p className="text-center text-gray-100 text-base md:text-lg mb-6 md:mb-8 px-4">
              Exclusive discounts, early access to new products, and special
              content.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 rounded sm:rounded-l sm:rounded-r-none"
              />
              <button className="bg-white text-gray-800 hover:bg-[#ff5252] px-6 py-2 rounded sm:rounded-r sm:rounded-l-none font-semibold transition whitespace-nowrap">
                <span className="text-gray-800">SIGN UP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        {/* Navigation and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h6 className="font-bold mb-4">NAVIGATE</h6>
            <ul className="list-none p-0 m-0 text-gray-400">
              <li className="mb-2">
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-4">SHOP</h6>
            <ul className="list-none p-0 m-0 text-gray-400">
              <li className="mb-2">
                <Link
                  href="/categories"
                  className="hover:text-white transition"
                >
                  Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/products?filter=best-sellers"
                  className="hover:text-white transition"
                >
                  Best Sellers
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/products?filter=new-arrivals"
                  className="hover:text-white transition"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left md:text-right">
            <h6 className="font-bold mb-4">NEED HELP?</h6>
            <p className="text-gray-400 mb-2">(555) 123-4567</p>
            <p className="text-gray-400">
              123 Balloon St, Party City, NY 10001
            </p>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="text-2xl hover:text-[#ff6b6b] transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} JIGSY. All rights reserved.
          </p>
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
  );
}
