// import { useContext, useEffect, useState } from 'react';


// eslint-disable-next-line react/prop-types
export default function CartItem({ image, name, price, category, quantity }) {



  ///////////////////////// 

  return (
    <>
      {/* other rows (content)  */}

      <div className='grid grid-cols-4 md:grid-cols-6 border-b items-center gap-4 p-4'>
        <button className='text-gray-400 hover:text-red-500'>X</button>
        {/* ////////////////////// */}
        <div className='flex col-span-2 items-center gap-4'>
          <img src={image} alt="img" className='w-12 h-12 object-contain' />
          <div>
            <p className="text-[14px]">{name}</p>
            <p className='text-gray-400'>{category}</p>
          </div>
        </div>
        {/* ////////////////////// */}
        <div className=' md:block'>{price}</div>
        {/* ////////////////////// */}
        <div className='flex items-center  gap-2'>
          <button className='bg-gray-200 px-2 rounded-sm' >-</button>
          <p>{quantity}</p>
          <button className='bg-gray-200 px-2 rounded-sm'>+</button>

        </div>
        {/* ////////////////////// */}

        <div className='hidden md:block'>{price * quantity}</div>
      </div>

    </>
  )
}
