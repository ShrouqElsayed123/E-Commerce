import { useContext } from 'react';
import bg from '../../assets/images/bg.avif'
import { CartContext } from '../CartContext/Cart.Context';
import Loading from '../Loading/Loading';
import EmptyCart from '../EmptyCart/EmptyCart';
import { useFormik } from 'formik';
import axios from 'axios';
import { userContext } from '../Context/User.Context';

export default function CheckOut() {
    const { token } = useContext(userContext);
    const { cartInfo } = useContext(CartContext);
    //    get cash order 

    async function getCashOrder(values) {


        try {
            const options = {
                method: "POST",
                url: `https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.cartId}`,
                header: {
                    token
                },
                data: values
            }
            const { data } = await axios.request(options);
            console.log(data);
        }
        catch (error) {
            console.log(error);

        }

    }
















    let formik = useFormik({
        initialValues: {
            "shippingAddress": {
                "details": "",
                "phone": "",
                "city": ""
            }
        }
    })
    return (

        <>
            {cartInfo === null
                ? (<Loading />)
                : (
                    <>
                        {cartInfo.numOfCartItems === 0
                            ? (<EmptyCart />)
                            : (
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
                                            <form action="" onSubmit={formik.handleSubmit} className='space-y-5'>
                                                <h1 className='font-bold text-xl mb-1'>Shipping Details</h1>
                                                <div className='w-full'>
                                                    <label htmlFor="" className='mb-1 block font-medium text-gray-800'>City</label>
                                                    <input type="text"
                                                        value={formik.values.shippingAddress.city}
                                                        name='shippingAddress.city'
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className='w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainColorLight1 focus:border-mainColorLight1' />
                                                </div>
                                                <div className='w-full'>
                                                    <label htmlFor="" className='mb-1 block font-medium text-gray-800'>Phone</label>
                                                    <input type="tel"
                                                        value={formik.values.shippingAddress.phone}
                                                        name='shippingAddress.phone'
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className='w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainColorLight1 focus:border-mainColorLight1' />
                                                </div>
                                                <div className='w-full'>
                                                    <label htmlFor="" className='mb-1 block font-medium text-gray-800'>Details</label>
                                                    <textarea type="text"
                                                        value={formik.values.shippingAddress.details}
                                                        name='shippingAddress.details'
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        className='w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainColorLight1 focus:border-mainColorLight1' />
                                                </div>

                                                <div className='space-x-2 mt-4 w-full'>
                                                    <button className='btn-filled'>Cash Order</button>
                                                    <button className='btn-outlined'>Online Payment</button>
                                                </div>
                                            </form>
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
