import Countdown from "./Countdown";
import img1 from '../../assets/images/womenshopping1.webp';
import img2 from '../../assets/images/womenshopping2.jpeg';

export default function PromoBanner() {
    return (
        <div className="flex justify-center items-center overflow-x-hidden px-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 rounded-xl shadow-md max-w-screen-lg w-full">

                {/* Left Image */}
                <img
                    src={img1}
                    className="w-full max-w-[200px] rounded-3xl object-cover"
                    alt="Left Woman"
                />

                {/* Center Content */}
                <div className="flex-1 p-4 md:p-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Summer <span className="text-mainColor">Discount</span>
                    </h2>
                    <p className="text-gray-600 mt-2">Get 50% off - Limited Time Offer!</p>

                    <Countdown />

                    <button className="mt-6 bg-mainColor text-white px-6 py-2 rounded-full hover:bg-mainColorLight1 transition">
                        Shop Now →
                    </button>
                </div>

                {/* Right Image */}
                <img
                    src={img2}
                    className="w-full max-w-[200px] rounded-3xl object-cover"
                    alt="Right Woman"
                />
            </div>
        </div>
    );
}
