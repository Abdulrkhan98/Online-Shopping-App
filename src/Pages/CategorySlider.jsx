import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const API = "https://e-commerce-backened-4fih.onrender.com/categories";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const sliderRef = useRef(null);

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-6">
     
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
      >
        ◀
      </button>

    
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
      >
        ▶
      </button>

    
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-10"
      >
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <Link key={index} to={`/category/${category}`}>
              <button className="min-w-max px-4 py-2 bg-gray-100 text-gray-800 rounded-full whitespace-nowrap hover:bg-green-600 hover:text-white transition-all">
                {category}
              </button>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">Loading categories...</p>
        )}
      </div>
    </div>
  );
};

export default CategorySlider;
