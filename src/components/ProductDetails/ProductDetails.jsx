import { useContext, useEffect, useState } from 'react';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa';
import apple1 from '../../assets/images/blog-img-1.jpeg'; // ضع الصور الحقيقية هنا
import apple2 from '../../assets/images/blog-img-1.jpeg';
import apple3 from '../../assets/images/Grocery Store.jpg';
import apple4 from '../../assets/images/Grocery Store2.jpg';
import bg from '../../assets/images/bg.avif'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { CartContext } from '../CartContext/Cart.Context';

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function ProductDetails({ id }) {
  const [productDetails, setProductDetails] = useState(null);
  const { addProductToCart, updateProductCount } = useContext(CartContext);
  const [liked, setLiked] = useState(false);
  const count = 1
  // Get specific Product
  async function getSpecificProduct() {
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b`,
        method: "GET",
      }
      const { data } = await axios.request(options);

      setProductDetails(data.data);
      console.log(data.data);



    }
    catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getSpecificProduct()

  }, [])
  const images = productDetails?.images || [];

  const [currentImg, setCurrentImg] = useState(0);       //ده هيمثل ال index بتاع الصورة

  const handleNext = () => {
    setCurrentImg((prev) => (prev + 1) % images.length)
  }
  const handlePrev = () => {
    setCurrentImg((prev) => (prev - 1) % images.length)
  }
  return (
    <>

      {productDetails ?
        <div className='max-w-7xl px-4 pb-10 mx-auto'>
          {/* // header  */}
          <div className='relative h-52 flex items-center justify-center text-center mb-10'>

            <div className='inset-0 opacity-15 bg-cover bg-center absolute'
              style={{ backgroundImage: `url(${bg})` }}
            ></div>

            <div className='relative z-10'>
              <h2 className='text-3xl font-bold mb-3'>Contact Us</h2>
              <p>Home / Contact Us</p>
            </div>

          </div>
          {/* content  */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* //imagessssss */}

            <div className='relative border-gray-100 border-2 p-2'>
              {/* current img  */}
              <img src={images[currentImg]} alt="" className="rounded-xl w-full max-w-[500px] h-[300px] object-cover mx-auto"
              />
              {/* left arrow  */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-mainColor text-white p-2 rounded-full shadow">
                <AiOutlineArrowLeft size={20} />
              </button>
              {/* right arrow  */}

              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-mainColor text-white p-2 rounded-full shadow">
                <AiOutlineArrowRight size={20} />
              </button>
              <div className="flex w-full mt-4 justify-between">
                {
                  images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="thumb"
                      onClick={() => setCurrentImg(index)}
                      className={`w-32 h-20 rounded-md border cursor-pointer ${setCurrentImg === index ? 'border-green-500' : 'border-gray-300'}`}
                    />
                  ))
                }
              </div>
            </div>



            <div className="space-y-4">
              <p className='text-mainColor text-sm'>{productDetails.category.name}</p>
              <h1 className='font-bold '>{productDetails.title}</h1>
              <div className='flex items-center gap-3'>
                <FaStar className='text-yellow-400' />
                <div className='space-x-1'>
                  <span>{productDetails.ratingsAverage}</span>
                  <span>({productDetails.ratingsQuantity}Reviews)</span>
                </div>
              </div>
              <p className='font-bold'>$ {productDetails.price}</p>
              <p className='text-gray-600'>{productDetails.description}</p>

              <div className='flex items-center gap-2 w-fit'>
                <div className='flex items-center  gap-2'>


                  <button className='bg-gray-200 px-2 rounded-sm'
                    onClick={
                      () => {
                        updateProductCount({ id: id, count: count - 1 })
                      }
                    } >-</button>
                  <p>{count}</p>
                  <button className='bg-gray-200 px-2 rounded-sm'
                    onClick={
                      () => {
                        updateProductCount({ id: id, count: count + 1 })
                      }
                    } >+</button>


                </div>


                {/* //add to cart  */}
                <button
                  onClick={() => { addProductToCart({ id: id }); }}
                  className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-green-200 transition"
                >
                  <i className="fa-solid fa-bag-shopping mr-1"></i> Add
                </button>

                {/* add to fav  */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={`ml-auto w-10 h-10 flex items-center justify-center border rounded-full transition-colors duration-200 ${liked ? " text-red-500 bg-red-100" : "border-gray-300 text-gray-500 hover:text-red-500"
                    }`}
                >
                  {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                </button>

              </div>
              <hr />
              <div>
                <div className="text-sm text-gray-500 space-y-1">
                  <p><span className="font-medium">SKU:</span> GRFR85648HGJ</p>
                  <p><span className="font-medium">Tags:</span> {productDetails.brand.name} , {productDetails.category.name}</p>
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







          {/* <div className="relative">
          <img src={images[currentImage]} alt="Green Apple" className="rounded-xl w-full" />
          <button onClick={handlePrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 text-white p-2 rounded-full shadow">
            <AiOutlineArrowLeft size={20} />
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full shadow">
            <AiOutlineArrowRight size={20} />
          </button>
          <div className="flex mt-4 gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setCurrentImage(index)}
                className={`w-16 h-16 rounded-md border cursor-pointer ${currentImage === index ? 'border-green-500' : 'border-gray-300'}`}
              />
            ))}
          </div>
        </div> */}
        </div>
        : <Loading />}
    </>
  )
}
