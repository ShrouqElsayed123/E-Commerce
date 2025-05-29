import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full border-b">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-gray-900 text-white text-sm px-4 py-2 flex justify-center items-center text-center">
          <p className="text-xs sm:text-sm">
            Sign up and <strong>GET 20% OFF</strong> for your first order.
            <a href="#" className="underline ml-1">Sign up now</a>
          </p>
          <button onClick={() => setShowBanner(false)} className="text-white ml-4">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white relative">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">N<span className="inline-block rotate-180">O</span>STRA</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <div className="cursor-pointer">Shop ▼</div>
          <div className="cursor-pointer">Most wanted</div>
          <div className="cursor-pointer">New arrival</div>
          <div className="cursor-pointer">Brands</div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Right: Search + Icons */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-2 rounded-md bg-gray-100 text-sm outline-none"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-2 top-2.5 text-gray-500"></i>
          </div>
          <i className="fa-solid fa-cart-shopping text-gray-700"></i>
          <i className="fa-solid fa-user text-gray-700"></i>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white text-sm font-medium flex flex-col gap-3">
          <div className="cursor-pointer">Shop ▼</div>
          <div className="cursor-pointer">Most wanted</div>
          <div className="cursor-pointer">New arrival</div>
          <div className="cursor-pointer">Brands</div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
