import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Loading from "../Loading/Loading";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
 async function getCategories() {
      try {
        const res = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
        if (res.status === 200) {
          setCategories(res.data.data);
        //   console.log(categories);
          
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
 async function getSubCategories() {
      try {
        const res = await axios.get("https://ecommerce.routemisr.com/api/v1/products?limit=100");
       console.log(res);
       
      } catch (error) {
        console.log(error);
      
    }
 }

  useEffect(() => {
   

    getCategories();
    getSubCategories()
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center gap-8 max-w-screen-xl flex-col mx-auto mt-20 px-4 relative">
      <div className="text-center">
        <p className="text-sm text-gray-500">Categories</p>
        <h2 className="text-2xl font-bold">
          Featured <span className="text-mainColor">Categories</span>
        </h2>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="relative w-full">
          {/* أزرار الأسهم */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* محتوى التصنيفات */}
          <div
            ref={scrollRef}
            className="flex gap-14 overflow-x-auto scroll-smooth hide-scrollbar px-6"
          >
            {categories.map((cat) => (
              <div
                key={cat._id}
                className="flex flex-col items-center text-center min-w-[120px]"
              >
                <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center shadow mb-2">
                  <img src={cat.image} alt={cat.name} className="w-20 h-20 object-contain" />
                </div>
                <p className="text-sm font-semibold">{cat.name}</p>
                <p className="text-xs text-gray-500">{Math.floor(Math.random() * 50 + 10)} Products</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
