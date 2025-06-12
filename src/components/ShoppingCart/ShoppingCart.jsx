import { useState } from 'react';
import bg from '../../assets/images/bg.avif'
import Swal from 'sweetalert2';
const initialCart = [
  { id: 1, name: "Fresh Oranges", weight: "500 g", price: 11.75, quantity: 4, image: "/images/oranges.png" },
  { id: 2, name: "Red Onion", weight: "500 g", price: 8.0, quantity: 2, image: "/images/onion.png" },
  { id: 3, name: "Fresh Yellow Lemon", weight: "1 kg", price: 8.0, quantity: 1, image: "/images/lemon.png" },
  { id: 4, name: "Pomegranate", weight: "500 g", price: 7.20, quantity: 2, image: "/images/pomegranate.png" },
];
export default function ShoppingCart() {
  const [cart, setCart] = useState(initialCart)

  // داله زيادة كميه عنصر 
  const updateQuantity = (id, delta) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    )
  }

  //  حذف عنصر واحد
  const deleteItem = (id) => {
    setCart(cart => cart.filter(item => id !== item.id))
  }




  // داله حذف العناصر
  const clearCart = () => {
    Swal.fire({
      title: 'Are you Sure',
      text: "You cannot undo after deleting all items!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes , Delete All',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire('Deleted!', 'All items in the cart have been deleted.', 'success')
      }
    })
  }


  // حسابات ال summary 
  const subTotal = cart.reduce((acc, curVal) => {
    return acc += (curVal.price) * (curVal.quantity)
  }, 0)
  console.log(subTotal);


  const total = subTotal + 50;
  const allQuantity = cart.reduce((acc, curVal) => {
    return acc += curVal.quantity
  }, 0)
  console.log(total);
  console.log(allQuantity);

  ///////////////////////// 

  return (
    <>
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

        {/* end header  */}
        {/* content  */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

          {/* product list  */}
          <div className='lg:col-span-2'>

            {/* title & Clear  */}
            <div className='flex justify-between items-center mb-5'>
              <h2 className='text-2xl font-bold'>Your Cart</h2>
              <button onClick={clearCart}
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

            {/* other rows (content)  */}
            {
              cart.map((item) => (
                <div key={item.id} className='grid grid-cols-4 md:grid-cols-6 border-b items-center gap-4 p-4'>
                  <button onClick={() => deleteItem(item.id)} className='text-gray-400 hover:text-red-500'>X</button>
                  {/* ////////////////////// */}
                  <div className='flex col-span-2 items-center gap-4'>
                    <img src={item.image} alt="img" className='w-12 h-12 object-contain' />
                    <div>
                      <p>{item.name}</p>
                      <p className='text-gray-400'>{item.weight}</p>
                    </div>
                  </div>
                  {/* ////////////////////// */}
                  <div className='hidden md:block'>{item.price}</div>
                  {/* ////////////////////// */}
                  <div className='flex items-center  gap-2'>
                    <button className='bg-gray-200 px-2 rounded-sm' onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <p>{item.quantity}</p>
                    <button className='bg-gray-200 px-2 rounded-sm' onClick={() => updateQuantity(item.id, +1)}>+</button>

                  </div>
                  {/* ////////////////////// */}

                  <div className='hidden md:block'>{(item.price) * (item.quantity)}</div>
                </div>
              ))
            }

          </div>


          {/* Order Summary */}
          <div className='bg-white border rounded-lg h-fit shadow-sm p-6'>
            <h1 className='text-xl font-bold mb-4'>Order Summary</h1>
            <div className='space-y-5 text-gray-600'>
              <div className='flex justify-between'>
                <p>items</p>
                <p>{allQuantity}</p>
              </div>
              <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{subTotal}</p>
              </div>
              <div className='flex justify-between'>
                <p>Shipping</p>
                <p>50.0$</p>
              </div>
              <hr />
              <div className='flex justify-between font-semibold'>
                <p>Total</p>
                <p>{total}</p>
              </div>
            </div>

            <button className='btn-filled w-full mt-6'>Proceed To CheckOut</button>
          </div>


        </div>
      </div>


    </>
  )
}
