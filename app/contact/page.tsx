"use client";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-52 pb-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#f9f3f1] rounded-xl p-12 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1
              className="text-4xl font-bold mb-2 text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              CAN'T FIND WHAT YOU NEED?
            </h1>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Contact our Customer Service Team
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Section - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-800 bg-transparent text-gray-900 placeholder-gray-500 uppercase tracking-wide focus:outline-none focus:border-gray-900 transition"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-800 bg-transparent text-gray-900 placeholder-gray-500 uppercase tracking-wide focus:outline-none focus:border-gray-900 transition"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-800 bg-transparent text-gray-900 placeholder-gray-500 uppercase tracking-wide focus:outline-none focus:border-gray-900 transition resize-y"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded hover:bg-gray-900 transition font-semibold uppercase tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Right Section - Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-800"
                    style={{ width: "18px", height: "18px" }}
                  />
                </div>
                <div>
                  <a
                    href="mailto:hello@getgigsy.com"
                    className="text-gray-800 hover:text-gray-600 transition text-base"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    hello@getgigsy.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-800"
                    style={{ width: "18px", height: "18px" }}
                  />
                </div>
                <div>
                  <a
                    href="tel:6465356505"
                    className="text-gray-800 hover:text-gray-600 transition text-base"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    (646) 535-6505
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-gray-800"
                    style={{ width: "18px", height: "18px" }}
                  />
                </div>
                <div>
                  <p
                    className="text-gray-800 text-base leading-relaxed"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    375 Greenwich Street, Floor 3, New
                    <br />
                    York, New York, United States
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-gray-800"
                    style={{ width: "18px", height: "18px" }}
                  />
                </div>
                <div>
                  <p
                    className="text-gray-800 text-base"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Monday — Friday, 11am — 6pm ET
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
