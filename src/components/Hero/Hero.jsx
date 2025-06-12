import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../assets/images/slider-image-1.jpeg';
import img2 from '../../assets/images/slider-image-2.jpeg';
import img3 from '../../assets/images/slider-image-3.jpeg';

import { useEffect, useState } from "react";

const slides = [
  {
    image: img1,
    text: "Discover the Best Deals on Markrtio!",
  },
  {
    image: img2,
    text: "Shop Smart, Save Big.",
  },
  {
    image: img3,
    text: "Your Favorite Brands in One Place.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative max-w-screen-xl mx-auto mt-5 h-[calc(100vh-130px)] overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}`}
        />
      ))}

      {/* Text overlay for each slide */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center px-4 bg-black/40 rounded-xl py-4">
          {slides[current].text}
        </h2>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-30"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-30"
      >
        ›
      </button>
    </div>
  );
}
