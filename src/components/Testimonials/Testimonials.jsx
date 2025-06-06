import { useState } from "react";

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

export default function Testimonials() {
    const [index, setIndex] = useState(0)
    const [activeBtn, setActiveBtn] = useState(null)
    const current = testimonials[index];
    const handlePrev = () => {
        setIndex((prev) => (prev == 0 ? testimonials.length - 1 : prev - 1));
        setActiveBtn("prev")
    }
    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setActiveBtn("next")
    }
    return (
        <>
            <div className="flex justify-center items-center gap-8 max-w-2xl  mx-auto mt-sectionMarginTop ">
                <button className={` rounded-full ${activeBtn == "prev" ? "bg-gray-400"
                    : "bg-mainColor hover:bg-mainColorLight1"
                    }`}
                    onClick={handlePrev}>
                    <i className="fa-solid fa-arrow-left text-white p-3"></i>

                </button>
                <div className="text-center ">
                    <p className="text-sm text-gray-500">Testimonials</p>
                    <h2 className="text-[18px] lg:text-2xl font-bold"> Testimonials from <span className="text-mainColor">Our Loyal Customers</span></h2>

                    {/* customer image  */}
                    <div className="flex items-center justify-center gap-5 mt-6">
                        {
                            testimonials.map((t, i) => (
                                <img
                                    key={i}
                                    src={t.image}
                                    className={`w-12 h-12 rounded-full border-2  ${i == index ? "border-secondaryColor" : "border-transparent"}`
                                    }
                                    alt={`Avatar ${i}`} />
                            ))
                        }
                    </div>

                    <div className="text-sm mt-6 text-gray-700 min-h-[200px] lg:min-h-[120px] lg:text-xl">{current.text}</div>


                </div>
                <button className={` rounded-full ${activeBtn == "next" ? "bg-gray-400"
                    : "bg-mainColor hover:bg-mainColorLight1"
                    }`}
                    onClick={handleNext}>
                    <i className="fa-solid fa-arrow-right text-white p-3"></i>
                </button>
            </div>
        </>
    )
}
