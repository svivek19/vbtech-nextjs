"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="p-2 bg-gray-100 text-blue-950 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold sm:text-3xl">V & B</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-xl focus:outline-none transition-transform"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
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
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-start px-4 space-y-3 py-3">
            <Link
              href="/"
              className="block hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
