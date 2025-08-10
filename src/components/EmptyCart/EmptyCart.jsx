import { NavLink } from "react-router-dom";

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center gap-5  p-10 text-center">
            {/* Image / Illustration */}
            <div className="w-60 h-60 ">
                <img src="https://i.pinimg.com/736x/e5/6f/6d/e56f6d2eac81c04643f6090be9ff2644.jpg" alt="" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 ">
                Your Cart is Empty
            </h2>

            {/* Description */}
            {/* <p className="text-gray-400 text-sm max-w-xs mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p> */}

            {/* Button */}
            <NavLink to="/" className="px-6 py-2 bg-mainColor text-white rounded-lg hover:bg-mainColorDark1 transition-colors">
                Go home
            </NavLink >
        </div>
    );
}
