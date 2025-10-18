import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Section = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://e-commerce-backened-4fih.onrender.com/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="overflow-x-auto py-6 px-4">
      <div className="flex gap-4 w-max">
        {categories.map((cat, idx) => (
          <Link key={idx} to={`/category/${cat}`} className="flex-shrink-0">
            <div className="h-24 w-32 bg-gray-100 flex items-center justify-center rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer">
              <p className="text-center text-sm font-medium px-2">{cat.toUpperCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section;
