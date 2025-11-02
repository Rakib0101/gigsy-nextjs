"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Main Register Container */}
        <div className="bg-[#f9f3f1] rounded-lg p-8 md:p-12">
          {/* Register Section */}
          <div>
            <h1
              className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3 uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              CREATE YOUR ACCOUNT
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
              <div className="mb-2">
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
                  minLength={5}
                  className="w-full px-4 py-3 border border-gray-300 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  required
                />
              </div>

              {/* Password Requirement */}
              <p className="text-gray-700 text-sm mb-8" style={{ fontFamily: "'Lato', sans-serif" }}>
                Password must be at least 5 characters.
              </p>

              {/* Create Account Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-8 py-3 rounded uppercase tracking-wide font-semibold hover:bg-gray-700 transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

