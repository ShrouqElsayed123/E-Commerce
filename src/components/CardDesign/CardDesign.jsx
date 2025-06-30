// components/ProductCard.jsx
// import { FaHeart, FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function Card({src,price,title,ratingsAverage,category,quantity}) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-xs p-4 relative">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-green-100 text-green-600 text-sm px-2 py-1 rounded font-semibold">
        50% off
      </div>

      {/* Favorite Icon */}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
      <i className="fa-regular fa-heart"></i>
      </button>

      {/* Product Image */}
      <img
        src={src}
        alt="Chocolate Ball"
        className="w-full h-full object-cover rounded-md"
      />

      {/* Category */}
      <p className="text-sm text-gray-400 mt-3">{category}</p>

      {/* Title */}
      <h3 className="text-md font-semibold text-gray-800">{title}</h3>

      {/* Weight */}
      {/* <p className="text-sm text-gray-500 mb-1">500 g</p> */}

      {/* Rating */}
      <div className="flex items-center text-yellow-500 text-sm mb-2">
      <i className="fa-solid fa-star"></i>
        <span className="text-gray-800 font-medium">{ratingsAverage}</span>
      </div>

      {/* Price Section */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-gray-800">{price}</p>
          <p className="text-sm text-gray-400 ">In stock,only {quantity} left</p>
        </div>

        {/* Add Button */}
        <button className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-green-200 transition">
         <i className="fa-solid fa-bag-shopping"></i> Add
        </button>
      </div>
    </div>
  );
}
