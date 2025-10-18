import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://e-commerce-backened-4fih.onrender.com/categories";

const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

 
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

  return (
    <div className="w-full py-4 overflow-x-auto">
      <div className="flex gap-4 px-4 sm:px-10 min-w-max">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <Link key={index} to={`/category/${category}`}>
              <button className="whitespace-nowrap px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-green-600 hover:text-white transition-all">
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

export default CategoryBar;
