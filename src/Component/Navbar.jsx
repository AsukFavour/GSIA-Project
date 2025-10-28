"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Clock, Menu, X } from "lucide-react";

export default function SchoolHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar with Contact Info */}
      <div className="bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
              <span>RD 10 FLAT 1A, federal housing estate,
              Port Harcourt, Rivers State</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 flex-shrink-0" />
              <span>Monday - Friday 8:00AM - 3:00PM </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-gray-800 no-underline">
              <img src="/logo.png" alt="GSIA Logo" className="w-14 h-14 object-cover"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Link
              to="/"
              className={`text-sm font-medium no-underline transition ${
                location.pathname === "/" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium no-underline transition ${
                location.pathname === "/about" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/academics"
              className={`text-sm font-medium no-underline transition ${
                location.pathname === "/academics" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Academics
            </Link>
            <Link
              to="/gallery"
              className={`text-sm font-medium no-underline transition ${
                location.pathname === "/gallery" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/calendar"
              className={`text-sm font-medium no-underline transition ${
                location.pathname === "/courses" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Calendar
            </Link>
            <Link
              to="/admission"
              className={`text-sm font-medium no-underline transition ${
                location.pathname === "/contact" ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              Admission
            </Link>
          </div>

          {/* Payment Button - Desktop */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              to="/payment"
              className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-600 transition no-underline shadow-md hover:shadow-lg"
            >
              Payment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              className={`block text-base font-semibold no-underline transition ${
                location.pathname === "/" ? "text-purple-600" : "text-gray-900 hover:text-purple-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block text-base font-semibold no-underline transition ${
                location.pathname === "/about" ? "text-purple-600" : "text-gray-900 hover:text-purple-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/academics"
              className={`block text-base font-semibold no-underline transition ${
                location.pathname === "/academics" ? "text-purple-600" : "text-gray-900 hover:text-purple-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              to="/gallery"
              className={`block text-base font-semibold no-underline transition ${
                location.pathname === "/gallery" ? "text-purple-600" : "text-gray-900 hover:text-purple-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/courses"
              className={`block text-base font-semibold no-underline transition ${
                location.pathname === "/courses" ? "text-purple-600" : "text-gray-900 hover:text-purple-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`block text-base font-semibold no-underline transition ${
                location.pathname === "/contact" ? "text-purple-600" : "text-gray-900 hover:text-purple-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/payment"
              className={`block px-6 py-2.5 rounded-full text-base font-semibold transition no-underline text-center shadow-md mt-2 ${
                location.pathname === "/payment" 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Payment
            </Link>
            <div className="pt-4 border-t border-gray-200"></div>
          </div>
        </div>
      )}
    </header>
  );
}