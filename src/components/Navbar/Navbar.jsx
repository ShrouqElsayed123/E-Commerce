import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [cartCount, setCartCount] = useState(3); // Example count

  return (
    <>
      <div className="w-full border-b">
        {/* Top Banner */}
        {showBanner && (
          <div className="bg-mainColor text-white text-sm px-4 py-2 flex justify-center items-center text-center">
            <p className="text-xs sm:text-sm">
              Sign up and <strong>GET 20% OFF</strong> for your first order.
              <a href="#" className="underline ml-1 text-white">
                Sign up now
              </a>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="text-white ml-4"
              aria-label="Close banner"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}

        <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
            {/* Logo */}
            <a href="#" className="flex items-baseline gap-2">
              <i className="fa-solid fa-bag-shopping text-2xl text-mainColor"></i>
              <p className="text-2xl font-bold dark:text-white">
                Marketo{" "}
                <span className="text-mainColor text-4xl font-bold dark:text-white">.</span>
              </p>
            </a>

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Main Content */}
            <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
              {/* Nav Links */}
              <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 text-sm font-medium">
                <li>
                  <a href="#" className="block py-2 px-3 text-mainColor font-bold md:p-0">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-700 hover:text-mainColor dark:text-white md:p-0">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-700 hover:text-mainColor dark:text-white md:p-0">Services</a>
                </li>

                {/* Cart Icon */}
             <li className="relative flex items-center py-2 px-3">
  <a href="#" className="relative text-gray-700 hover:text-mainColor dark:text-white md:p-0">
    <i className="fa-solid fa-cart-shopping text-xl"></i>
    {/* Cart Count Badge */}
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 leading-none">
      {cartCount}
    </span>
  </a>
</li>


                {/* Login & Signup Buttons */}
                <div className="btn-filled">login</div>
                <div className="btn-outlined">Sign Up</div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
