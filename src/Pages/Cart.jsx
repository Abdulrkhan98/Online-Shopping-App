import React from 'react'
import hoodie1 from "../assets/hoodie1.jpg";

const Cart = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center py-10 px-5 sm:px-10 lg:px-20 gap-10'>
      
     
      <div className='flex justify-center lg:justify-end w-full lg:w-1/2'>
        <img
          className='h-[350px] sm:h-[500px] md:h-[650px] lg:h-[850px] w-auto object-cover rounded-md'
          src={hoodie1}
          alt="hoodie"
        />
      </div>

     
      <div className='w-full lg:w-1/2 max-w-lg'>
        <h5 className='text-xl sm:text-2xl font-[inter] font-bold pb-4 text-center lg:text-left'>
          Casual Hoodie 1
        </h5>

        <p className='text-orange-700 text-lg sm:text-xl font-bold pb-4 text-center lg:text-left'>
          15% OFF
        </p>

        <p className='text-gray-600 font-bold text-base sm:text-lg pb-4 text-center lg:text-left'>
          Fashion never stops. There is always the new project, the new opportunity.
          The important thing is to take your time and not get stressed.
          I just want to do what I do.
        </p>

        <div className='pb-4'>
         <div class="relative inline-block text-left">
  <button class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
    Size
  </button>

 
  <div class="absolute mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
    <ul class="py-1">
      <li><button class="block w-full text-left px-4 py-2 hover:bg-gray-100">S</button></li>
      <li><button class="block w-full text-left px-4 py-2 hover:bg-gray-100">M</button></li>
      <li><button class="block w-full text-left px-4 py-2 hover:bg-gray-100">L</button></li>
      <li><button class="block w-full text-left px-4 py-2 hover:bg-gray-100">XL</button></li>
    </ul>
  </div>
</div>

          
          <div className='pt-4'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Pick a color
            </label>
            <select
              id="color"
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400'
            >
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
            </select>
          </div>

         
          <button
            className='mt-4 border rounded-sm px-5 py-2 bg-gray-100 text-gray-600 
            cursor-pointer hover:bg-gray-200 transition'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart;
