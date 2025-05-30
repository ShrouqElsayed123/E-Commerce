import { useState } from "react";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
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
        <a href="#" className="flex items-baseline gap-2 ">
          <i className="fa-solid fa-bag-shopping text-2xl block text-mainColor"></i>
          <p className="text-2xl font-bold dark:text-white">Marketo <span className=" text-mainColor text-4xl font-bold dark:text-white">.</span></p>
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Main Content */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"
            }`}
        >
          {/* Nav Links */}
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-sm font-medium">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-700 dark:text-blue-400 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-400 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-400 md:p-0"
              >
                Services
              </a>
            </li>
          </ul>

          {/* Search Input */}
          <div className="relative mt-4 md:mt-0 md:ml-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>


          <div className="btn-filled">login</div>
          <div className="btn-outlined">Sign Up</div>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}
