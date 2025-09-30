import React from 'react'
import { FaHeart, FaShoppingBag } from 'react-icons/fa'

const Home = () => {
  return (

    <header>
    <div className='bg-black text-white text-lg flex justify-center items-center'>
     Welcome ALL
     </div>
     <div className="flex justify-between items-center px-10 py-4 bg-white shadow">
     <div>
          <h1 className="text-2xl font-bold tracking-wide">STORE</h1>
          <p className="text-xs uppercase">All in one</p>
        </div>
   
     <div className="flex  items-center  gap-6 text-sm font-medium">
      <button className="hover:text-blue-600">Logout</button>
       <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaHeart /> Wish List
       </div>
       <div className='flex items-center gap-1 hover:text-blue-600 cursor-pointer'>
          <FaShoppingBag/> Shopping Bag
       </div>
       <span>Hi Abadul</span>
     </div>
     </div>
     <div className='bg-black text-white text-sm flex justify-around items-center gap-20 py-3'>
       <span>50% OFF</span>
        <span>Free shipping and returns</span>
        <span>Different payment methods</span>
     </div>
     </header>
  )
}

export default Home