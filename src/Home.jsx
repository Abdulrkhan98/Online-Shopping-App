import React from 'react'
import { FaHeart, FaShoppingBag } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="w-full">
      
      <div className="bg-black text-white text-lg flex justify-center items-center py-2">
        Welcome ALL
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-20 py-4 bg-white shadow gap-4 md:gap-0">
       
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">STORE</h1>
          <p className="text-[10px] md:text-xs uppercase">All in one</p>
        </div>

        
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-xs md:text-sm font-medium">
          <button className="hover:text-blue-600">Logout</button>

          <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaHeart /> Wish List
          </div>

          <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaShoppingBag /> Shopping Bag
          </div>

          <span className="hidden sm:inline">Hi Abdul</span>
        </div>
      </div>

     
      <div className="bg-black text-white text-xs md:text-sm flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-2 sm:gap-10 py-2 sm:py-3 text-center">
        <span>50% OFF</span>
        <span>Free shipping and returns</span>
        <span>Different payment methods</span>
      </div>
    </div>
  )
}

export default Home

