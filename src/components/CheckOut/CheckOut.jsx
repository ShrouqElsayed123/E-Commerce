import { useContext } from 'react';
import bg from '../../assets/images/bg.avif'
import { CartContext } from '../CartContext/Cart.Context';
import Loading from '../Loading/Loading';

export default function CheckOut() {
    let { cartInfo } = useContext(CartContext);

    return (

     <>
     {cartInfo === null
     ?(<Loading />)
     :(
       <>
       {cartInfo.numOfCartItems === 0
       ?(<p>Empty</p>)
    :(
         <div className='max-w-7xl px-4 pb-10 mx-auto'>
            {/* header */}
            <div className='relative h-52 flex items-center justify-center text-center mb-10'>
                <div
                    className='inset-0 opacity-15 bg-cover bg-center absolute'
                    style={{ backgroundImage: `url(${bg})` }}
                ></div>
                <div className='relative z-10'>
                    <h2 className='text-3xl font-bold mb-3'>CheckOut </h2>
                    <p>Home / Shopping Cart / CheckOut</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Formmmmmmm  */}
                <div className='lg:col-span-2'>
                </div>


                {/* order summary  */}
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

                </div>
            </div>




        </div>
    )}
       </>
     )
    }
     
     </>
    )
}
