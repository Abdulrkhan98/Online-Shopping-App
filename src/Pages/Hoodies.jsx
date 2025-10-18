import React from 'react';
import hoodie1 from "../assets/hoodie1.jpg";
import hoodie2 from "../assets/hoodie2.jpg";
import hoodie3 from "../assets/hoodie3.jpg";
import hoodie4 from "../assets/hoodie4.jpg";
import hoodie5 from "../assets/hoodie5.jpg";
import hoodie6 from "../assets/hoodie6.jpg";
import hoodie7 from "../assets/hoodie7.jpg";
import hoodie8 from "../assets/hoodie8.jpg";

const Hoodies = () => {
  return (
    <div className="pt-16">
      <div className="pl-6 sm:pl-10 md:pl-14">
        <div className="text-3xl sm:text-4xl font-[inter] font-bold text-gray-600">
          Hoodies
        </div>

        <div className="flex flex-wrap items-center justify-between py-8 gap-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <button className="text-gray-900 text-md cursor-pointer hover:bg-gray-100 rounded-sm border py-2 px-5">
              Male
            </button>
            <button className="text-gray-900 text-md rounded-sm border py-2 px-3 hover:bg-gray-100 cursor-pointer">
              Female
            </button>
            <button className="text-gray-900 text-md cursor-pointer hover:bg-gray-100 rounded-sm border py-2 px-5">
              High Price
            </button>

            <button
              aria-expanded="true"
              aria-haspopup="menu"
              id="r27n"
              className="align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-md py-2 px-5 text-gray-900 cursor-pointer bg-transparent font-normal border hover:bg-gray-100 rounded-sm"
              type="button"
            >
              Select a color
            </button>

            <div className="relative">
              <button
                id="dropdownButton"
                className="align-middle select-none font-sans text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-md py-2 px-5 text-gray-900 cursor-pointer bg-transparent font-normal border hover:bg-gray-100 rounded-sm"
              type="button"
              >
                SELECT A SIZE
              </button>

              <div
                id="dropdownMenu"
                className="hidden absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg"
              >
                <ul className="py-1 text-gray-900">
                  <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">S</li>
                  <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">M</li>
                  <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">L</li>
                  <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">XL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-2 sm:mt-0 mr-5">
            <button className="text-gray-900 text-md cursor-pointer hover:bg-gray-100 rounded-sm border py-2 px-5">
              Clear Filter
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center py-8 gap-y-10 gap-x-10 px-4 sm:px-6 md:px-10 lg:px-14">
        {[hoodie1, hoodie2, hoodie3, hoodie4, hoodie5, hoodie6, hoodie7, hoodie8].map((hoodie, i) => (
          <div
            key={i}
            className="w-full max-w-xs sm:max-w-sm h-163 border border-gray-200 ml-6 shadow-blue-500/40 rounded-lg overflow-hidden relative"
          >
            <div className="h-[260px] sm:h-[320px] md:h-[350px] bg-white">
              <img
                className="w-full h-full object-cover rounded-md"
                src={hoodie}
                alt={`Hoodie ${i + 1}`}
              />
            </div>
            <div className="px-4 text-center p-6">
              <p className="text-lg sm:text-2xl text-gray-900 font-normal">
                Casual Hoodie {i + 1}
              </p>
              <p className="text-base font-sans leading-[1.3] sm:text-lg text-gray-950 leading-relaxed mb-3">
                Fashion never stops. There is always the new project, the new
                opportunity. The important thing is to take your time and not get
                stressed. I just want to do what I do.
              </p>
              <div className="flex items-center justify-center p-5">
                <p className="text-sm mr-8 font-sans">85$</p>
                <p className="antialiased font-sans text-sm font-light text-gray-700 flex gap-2">
                  <span className="block h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-black"></span>
                  <span className="block h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-600"></span>
                  <span className="block h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-600"></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hoodies;
