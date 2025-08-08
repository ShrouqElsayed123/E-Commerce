import { useContext } from "react";
import { CartContext } from "../CartContext/Cart.Context";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card({ src, id, price, title, ratingsAverage, category, quantity }) {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full sm:w-72 md:w-80 lg:w-96 p-4 relative">
      {/* Favorite Icon */}
      <button className="absolute top-2 z-50 text-2xl right-2 text-gray-400 hover:text-red-500">
        <i className="fa-regular fa-heart"></i>
      </button>

      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden group">

        <img
          src={src}
          alt="Product"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <NavLink to="productdetails" className="text-2xl text-white">
            <i className="fa-regular fa-eye"></i>
          </NavLink>
        </div>
      </div>


      {/* Category */}
      <p className="text-sm text-gray-400 mt-3">{category}</p>

      {/* Title */}
      <h3 className="text-md font-semibold text-gray-800">{title}</h3>

      {/* Rating */}
      <div className="flex items-center text-yellow-500 text-sm mb-2">
        <i className="fa-solid fa-star mr-1"></i>
        <span className="text-gray-800 font-medium">{ratingsAverage}</span>
      </div>

      {/* Price Section */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-gray-800">{price}</p>
          <p className="text-sm text-gray-400">In stock, only {quantity} left</p>
        </div>

        {/* Add Button */}
        <button
          onClick={() => { addProductToCart({ id: id }); }}
          className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-green-200 transition"
        >
          <i className="fa-solid fa-bag-shopping mr-1"></i> Add
        </button>
      </div>
    </div>
  );
}
