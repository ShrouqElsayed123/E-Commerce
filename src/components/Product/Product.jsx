import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "../CardDesign/CardDesign";

export default function Product() {
  const [products, setProducts] = useState([]);
  const containerRef = useRef(null); // لإدارة العنصر الذي يحتوي على المنتجات

  async function getAllProducts() {
    try {
      const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
      // استخدام slice للحصول على أول 10 منتجات فقط
      setProducts(data.data.slice(0, 10));
      // console.log(data);
      // console.log(data.data.id);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);


  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 relative">
      {/* الأسهم */}
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

      {/* تطبيق التمرير الأفقي مع إخفاء شريط التمرير */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-6 py-4"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // لإخفاء الشريط على متصفحات Firefox
        }}
      >
        {products.map((p) => (
          <div key={p._id} className="flex-shrink-0">
            <Card
              id={p._id}
              src={p.imageCover}
              price={p.price}
              title={p.title}
              ratingsAverage={p.ratingsAverage}
              category={p.category.name}
              quantity={p.quantity}
            />
          </div>
        ))}
      </div>


    </div>
  );
}
