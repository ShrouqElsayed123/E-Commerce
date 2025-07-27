import { useContext, useEffect } from 'react';
import { CartContext } from '../CartContext/Cart.Context';
import Loading from '../Loading/Loading';
import CartItem from './CartItem';
import bg from '../../assets/images/bg.avif'

export default function ShoppingCart() {
  let { getCartProduct, cartInfo } = useContext(CartContext);

  useEffect(() => {
    getCartProduct();
  }, []);

  return (
    <>
      {cartInfo === null ? (
        <Loading />
      ) : (
        <>
          {cartInfo.numOfCartItems === 0 ? (
            <p>Empty</p>
          ) :
            (
              <div className='max-w-7xl px-4 pb-10 mx-auto'>
                {/* // header  */}
                <div className='relative h-52 flex items-center justify-center text-center mb-10'>

                  <div className='inset-0 opacity-15 bg-cover bg-center absolute'
                    style={{ backgroundImage: `url(${bg})` }}
                  ></div>

                  <div className='relative z-10'>
                    <h2 className='text-3xl font-bold mb-3'>Shopping Cart</h2>
                    <p>Home / Shopping Cart</p>
                  </div>

                </div>



                {/* content  */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                  {/* product list  */}
                  <div className='lg:col-span-2'>

                    {/* title & Clear  */}
                    <div className='flex justify-between items-center mb-5'>
                      <h2 className='text-2xl font-bold'>Your Cart</h2>
                      <button
                        className='text-mainColor hover:text-mainColorDark1 transition-all duration-100 underline'
                      >Clear Shopping Cart</button>
                    </div>

                    {/* product table  */}
                    {/* row1 (header)  */}
                    <div className='bg-secondaryColor font-medium grid grid-cols-4 md:grid-cols-6 px-4 py-3 rounded-t-md'>
                      <div className='col-span-3'>Prodct</div>
                      <div className='hidden md:block'>Price</div>
                      <div>Quantity</div>
                      <div className='hidden md:block'>SubTotal</div>
                    </div>
                    {
                      cartInfo.data.products.map((p) => (
                        <CartItem key={p._id} image={p.product.imageCover} name={p.product.title} category={p.product.category.name} price={p.price} quantity={p.product.quantity} count={p.count} />
                      ))
                    }
                  </div>





                  {/* Order Summary */}
                  <div className='bg-white border rounded-lg h-fit shadow-sm p-6'>
                    <h1 className='text-xl font-bold mb-4'>Order Summary</h1>
                    <div className='space-y-5 text-gray-600'>
                      <div className='flex justify-between'>
                        <p>items</p>
                        <p>{cartInfo.numOfCartItems}</p>
                      </div>
                      <div className='flex justify-between'>
                        <p>SubTotal</p>
                        <p>{cartInfo.data.totalCartPrice}</p>
                      </div>
                      <div className='flex justify-between'>
                        <p>Shipping</p>
                        <p>50.0$</p>
                      </div>
                      <hr />
                      <div className='flex justify-between font-semibold'>
                        <p>Total</p>
                        <p>{(cartInfo.data.totalCartPrice) - 50}</p>
                      </div>
                    </div>

                    <button className='btn-filled w-full mt-6'>Proceed To CheckOut</button>
                  </div>

                </div>
              </div>

            )}
        </>
      )}
    </>
  );
}
