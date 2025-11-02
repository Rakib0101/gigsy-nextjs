"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Main Login Container */}
        <div className="bg-[#f9f3f1] rounded-lg p-8 md:p-12">
          {/* Login Section */}
          <div className="mb-10">
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-3 uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              LOGIN TO YOUR ACCOUNT
            </h1>
            <p className="text-gray-700 text-sm md:text-base mb-8 text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
              View your order history, address book, and more.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-normal mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  required
                />
              </div>

              {/* Forgot Password and Remember Me */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <Link
                  href="/forgot-password"
                  className="text-gray-700 text-sm underline hover:text-gray-900 transition"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  I FORGOT MY PASSWORD
                </Link>
                <label
                  className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-gray-400 cursor-pointer"
                  />
                  <span className="uppercase tracking-wide">REMEMBER ME?</span>
                </label>
              </div>

              {/* Login Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-8 py-3 rounded uppercase tracking-wide font-semibold hover:bg-gray-700 transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-10"></div>

          {/* New User Section */}
          <div className="text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NEW TO OUR SHOP?
            </h2>
            <Link
              href="/register"
              className="inline-block border-2 border-gray-800 bg-transparent text-gray-800 px-8 py-3 rounded uppercase tracking-wide font-semibold hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

