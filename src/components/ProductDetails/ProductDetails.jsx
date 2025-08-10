import { useContext, useEffect, useState } from 'react';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa';

import bg from '../../assets/images/bg.avif'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { CartContext } from '../CartContext/Cart.Context';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [products, setProducts] = useState(null);
  const { addProductToCart } = useContext(CartContext);

  const [likedMain, setLikedMain] = useState(false); // حالة القلب في صفحة المنتج الأساسية

  const [likedItems, setLikedItems] = useState({}); // حالة القلوب لكل منتج في Related Products (key: productId, value: boolean)

  let { id } = useParams();

  // Get specific Product
  async function getSpecificProduct({ id }) {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method: "GET",
      };
      const { data } = await axios.request(options);

      setProductDetails(data.data);
      console.log(data.data);

    } catch (error) {
      console.log(error);
    }
  }

  // Get Related Products 
  async function getRelatedProject() {
    try {
      if (!productDetails?.category?._id) return; // تأكد إن البيانات جاهزة

      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?category[in]=${productDetails.category._id}`,
        method: "GET",
      };
      const { data } = await axios.request(options);
      setProducts(data.data);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpecificProduct({ id: id });
  }, [id]);

  useEffect(() => {
    if (!productDetails) return;
    getRelatedProject();
  }, [productDetails]);

  const images = productDetails?.images || [];

  const [currentImg, setCurrentImg] = useState(0);

  const handleNext = () => {
    setCurrentImg((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  // دالة لتبديل حالة الإعجاب لكل منتج في Related Products
  const toggleLikeItem = (productId) => {
    setLikedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <>
      {productDetails ? (
        <div className='max-w-7xl px-4 pb-10 mx-auto'>
          {/* header */}
          <div className='relative h-52 flex items-center justify-center text-center mb-10'>
            <div
              className='inset-0 opacity-15 bg-cover bg-center absolute'
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
            <div className='relative z-10'>
              <h2 className='text-3xl font-bold mb-3'>Product Details</h2>
              <p>Home / Product Details</p>
            </div>
          </div>

          {/* content */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* images */}
            <div className='relative border-gray-100 border-2 p-2'>
              <img
                src={images[currentImg]}
                alt=""
                className="rounded-xl w-full max-w-[500px] h-[300px] object-cover mx-auto"
              />
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-mainColor text-white p-2 rounded-full shadow"
              >
                <AiOutlineArrowLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-mainColor text-white p-2 rounded-full shadow"
              >
                <AiOutlineArrowRight size={20} />
              </button>
              <div className="flex w-full mt-4 justify-between">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="thumb"
                    onClick={() => setCurrentImg(index)}
                    className={`w-32 h-20 rounded-md border cursor-pointer ${
                      currentImg === index ? 'border-green-500' : 'border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* product details */}
            <div className="space-y-4">
              <p className='text-mainColor text-sm'>{productDetails.category.name}</p>
              <h1 className='font-bold '>{productDetails.title}</h1>
              <div className='flex items-center gap-3'>
                <FaStar className='text-yellow-400' />
                <div className='space-x-1'>
                  <span>{productDetails.ratingsAverage}</span>
                  <span>({productDetails.ratingsQuantity} Reviews)</span>
                </div>
              </div>
              <p className='font-bold'>$ {productDetails.price}</p>
              <p className='text-gray-600'>{productDetails.description}</p>

              <div className='flex items-center gap-2 w-fit'>
                {/* add to cart */}
                <button
                  onClick={() => {
                    addProductToCart({ id: id });
                  }}
                  className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-green-200 transition"
                >
                  <i className="fa-solid fa-bag-shopping mr-1"></i> Add
                </button>

                {/* main product like button */}
                <button
                  onClick={() => setLikedMain(!likedMain)}
                  className={`ml-auto w-10 h-10 flex items-center justify-center border rounded-full transition-colors duration-200 ${
                    likedMain ? 'text-red-500 bg-red-100' : 'border-gray-300 text-gray-500 hover:text-red-500'
                  }`}
                >
                  {likedMain ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                </button>
              </div>
              <hr />
              <div>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>
                    <span className="font-medium">SKU:</span> GRFR85648HGJ
                  </p>
                  <p>
                    <span className="font-medium">Tags:</span> {productDetails.brand.name} ,{' '}
                    {productDetails.category.name}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <p className="font-medium text-gray-700">Share :</p>
                  <div className="flex gap-3 text-white ">
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer bg-mainColor p-1 rounded-full text-2xl" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer bg-mainColor p-1 rounded-full text-2xl" />
                    <FaPinterest className="hover:text-red-600 cursor-pointer bg-mainColor p-1 rounded-full text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {products ? (
            <div className="px-4 py-10">
              <h3 className="text-center text-gray-500">Related Products</h3>
              <h2 className="text-center text-2xl font-bold mb-6">
                Explore <span className="text-green-600">Related Products</span>
              </h2>

              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="border rounded-xl p-4 relative hover:shadow-lg transition">
                      {/* Heart icon for each related product */}
                      <button
                        onClick={() => toggleLikeItem(product.id)}
                        className={`ml-auto w-10 h-10 flex items-center justify-center border rounded-full transition-colors duration-200 ${
                          likedItems[product.id] ? 'text-red-500 bg-red-100' : 'border-gray-300 text-gray-500 hover:text-red-500'
                        }`}
                      >
                        {likedItems[product.id] ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                      </button>

                      {/* Product image */}
                      <img
                        src={product.imageCover}
                        alt={product.title}
                        className="w-full h-40 object-contain mb-4"
                      />

                      {/* Category */}
                      <p className="text-sm text-gray-500">{product.category.name}</p>

                      {/* Title */}
                      <h3 className="font-semibold truncate">{product.title}</h3>

                      {/* Price */}
                      <div className="flex items-center gap-2 my-2">
                        <span className="text-lg font-bold">${product.price}</span>
                      </div>

                      <div className='flex justify-between items-center'>
                        {/* Rating */}
                        <div className='flex items-center gap-3'>
                          <FaStar className='text-yellow-400' />
                          <div className='space-x-1'>
                            <span>{product.ratingsAverage}</span>
                            <span>({product.ratingsQuantity} Reviews)</span>
                          </div>
                        </div>

                        {/* Add button */}
                        <button
                          onClick={() => {
                            addProductToCart({ id: product.id });
                          }}
                          className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-green-200 transition"
                        >
                          <i className="fa-solid fa-bag-shopping mr-1"></i> Add
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
