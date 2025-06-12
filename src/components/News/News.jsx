import { useState } from "react";

const faqs = [
    {
        question: "Are the products fresh and of high quality?",
        answer: "Yes, all our products are sourced from trusted suppliers and checked for freshness.",
    },
    {
        question: "Are your articles written by professionals or experts?",
        answer: "Yes, our content is created by a team of skilled writers and subject matter experts."

    },
    {
        question: "Can I subscribe to receive new blog updates?",
        answer: "Yes! Simply subscribe to our newsletter, and we’ll notify you whenever a new article is published."

    },
    {
        question: "How can I benefit from reading your blog posts?",
        answer: "Our blog posts offer expert advice, product guides, how-tos, and the latest updates to help you make informed shopping decisions."

    },
    {
        question: "How often do you publish new articles?",
        answer: "We publish fresh content weekly to ensure you stay up-to-date with the latest trends and information."

    },
];
export default function News() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="flex justify-center items-center gap-8 max-w-screen-lg flex-col  mx-auto mt-sectionMarginTop ">
                <div className="section-header text-center">
                    <p className="text-sm text-gray-500">News & Blogs</p>
                    <h2 className="text-[18px] lg:text-2xl font-bold"> Our Latest <span className="text-mainColor">News & Blogs</span></h2>
                </div>
                <div className="w-full space-y-4 p-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-lg transition-all duration-300 ${isOpen ? "bg-mainColor text-white" : "bg-gray-100 text-black"
                                    }`}
                            >
                                <button
                                    className="flex justify-between items-center w-full p-4 text-left font-semibold"
                                    onClick={() => toggle(index)}
                                >
                                    {faq.question}
                                    {isOpen ? (
                                        <i className="w-5 h-5 text-white fa-solid fa-minus"></i>

                                    ) : (
                                        <i className="w-5 h-5 text-gray-600 fa-solid fa-plus"></i>


                                    )}
                                </button>
                                {isOpen && (
                                    <div className="px-4 pb-4 text-sm text-white">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-screen-lg text-center md:text-left p-4 items-center mx-auto justify-between flex-col md:flex-row flex mt-10 features">
                <div className="w-full  flex flex-col md:flex-row gap-5 items-center ">
                    <i className="text-mainColor font-bold text-4xl fa-solid fa-truck"></i>
                    <div className="text">
                        <h1 className="font-bold text-[18px] ">Free Shipping</h1>
                        <p className="text-gray-600 ">Free shipping for order above 50$</p>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                    <i className="text-mainColor font-bold text-4xl fa-solid fa-money-check-dollar"></i>
                    <div className="text">
                        <h1 className="font-bold text-[18px]">Flexible Payment</h1>
                        <p className="text-gray-600 ">Multiple secure payment options</p>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                    <i className="text-mainColor font-bold text-4xl fa-solid fa-headset"></i>
                    <div className="text">
                        <h1 className="font-bold text-[18px]">24 * 7 Support</h1>
                        <p className="text-gray-600 ">We support online all days</p>
                    </div>
                </div>
            </div>
        </>




    );
}
