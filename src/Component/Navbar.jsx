"use client";

import { useState } from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function SchoolHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1F2544] text-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">School Name</span>
            <img src={logo} alt="School Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
          >
            Home
          </Link>
          <Link
            to="/academics"
            className="text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
          >
            Academics
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
          >
            Courses
          </Link>
          <Link
            to="/gallery"
            className="text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
          >
            Gallery
          </Link>
          <Link
            to="/calendar"
            className="text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
          >
            Calendar
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
          >
            Contact
          </Link>
        </PopoverGroup>

        {/* Admission Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/payment"
            className="bg-[#81689D] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#6a5780] transition no-underline"
          >
            Payment
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-0 z-10 bg-[#1F2544] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-white">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">School Name</span>
              <img
                src={logo}
                alt="School Logo"
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            <Link
              to="/"
              className="block text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
            >
              Home
            </Link>
            <Link
              to="/academics"
              className="block text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
            >
              Academics
            </Link>
            <Link
              to="/about"
              className="block text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
            >
              About Us
            </Link>
            <Link
              to="/courses"
              className="block text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
            >
              Courses
            </Link>
            <Link
              to="/gallery"
              className="block text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
            >
              Gallery
            </Link>
            <Link
              to="/calendar"
              className="block text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
            >
              Calendar
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-semibold text-white hover:text-[#81689D] no-underline transition"
            >
              Contact
            </Link>
            <Link
              to="/payment"
              className="block bg-[#81689D] text-center text-white px-4 py-2 rounded-md font-semibold hover:bg-[#6a5780] transition no-underline"
            >
            Payments
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
