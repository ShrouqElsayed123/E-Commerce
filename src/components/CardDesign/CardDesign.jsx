import { useContext } from "react";
import { CartContext } from "../CartContext/Cart.Context";

// eslint-disable-next-line react/prop-types
export default function Card({ src, id, price, title, ratingsAverage, category, quantity }) {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full sm:w-72 md:w-80 lg:w-96 p-4 relative">
      {/* Favorite Icon */}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
        <i className="fa-regular fa-heart"></i>
      </button>

      {/* Product Image */}
      <img
        src={src}
        alt="Product"
        className="w-full aspect-[4/3] object-cover rounded-md"
      />

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
          <p className="text-sm text-gray-400">In stock, only {id} left</p>
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
