// components/Testimonials.jsx
import { useState } from "react";
// import { ArrowLeft, ArrowRight, Star } from "lucide-react";
const testimonials = [
    {
        name: "User 1",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I've tried several grocery delivery services, and this one is by far the best. The website is user-friendly, the selection is vast, and the customer service is outstanding. Highly recommend!",
        rating: 5,
    },
    {
        name: "User 2",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "Really loved the fast delivery and quality of products. Definitely using again.",
        rating: 4.5,
    },
    {
        name: "User 3",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
        text: "Great user experience, very easy to navigate and order.",
        rating: 5,
    },
    // Add more testimonials if needed
];
export default function Test() {
    const [index, setIndex] = useState(0);
    const [activeBtn, setActiveBtn] = useState(null); // 'prev' or 'next'
    const current = testimonials[index];
    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setActiveBtn("prev");
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setActiveBtn("next");
    };


    return (
        <>
            <div className="text-center max-w-2xl  mx-auto py-10 px-4">
                <p className="text-sm text-gray-500">Testimonials</p>
                <h2 className="text-3xl font-bold">
                    Testimonials from <span className="text-mainColor">Our Loyal Customers</span>
                </h2>

                {/* Avatars */}
                <div className="flex justify-center items-center gap-3 mt-6">
                    {testimonials.map((t, i) => (
                        <img
                            key={i}
                            src={t.image}
                            className={`w-12 h-12 rounded-full object-cover border-2 ${i === index ? "border-secondaryColor" : "border-transparent"
                                }`}
                            alt={`Avatar ${i}`}
                        />
                    ))}
                </div>

                {/* Text */}
                <div className="mt-6 text-gray-700 text-lg min-h-[120px] transition-all duration-300 ease-in-out">{current.text}</div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-8 mt-6">
                    <button
                        onClick={handlePrev}
                        className={`p-2 rounded-full transition-colors duration-300 ${activeBtn === "prev"
                                ? "bg-gray-400 "
                                : "bg-mainColor hover:bg-mainColorLight1"
                            }`}
                    >
                        <i className="fa-solid fa-arrow-left text-white"></i>
                    </button>

                    <button
                        onClick={handleNext}
                        className={`p-2 rounded-full transition-colors duration-300 ${activeBtn === "next"
                                ? "bg-gray-400 "
                                : "bg-mainColor hover:bg-mainColorLight1"
                            }`}
                    >
                        <i className="fa-solid fa-arrow-right text-white"></i>
                    </button>
                </div>


                {/* Rating */}
                <div className="flex justify-center items-center gap-1 mt-4 text-yellow-500">
                    {Array.from({ length: Math.floor(current.rating) }, (_, i) => (
                        <i className="fa-solid fa-star w-5 h-5" key={i}></i>
                    ))}
                    {current.rating % 1 !== 0 && (
                        <i className="fa-solid fa-star w-5 h-5 opacity-50"></i>
                    )}
                    <span className="text-black font-medium ml-2">{current.rating.toFixed(1)}</span>
                </div>
            </div>
        </>
    );
}