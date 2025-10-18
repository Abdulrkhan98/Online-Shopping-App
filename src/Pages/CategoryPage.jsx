import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tshirt from "../assets/Tshirt.jpg"; 
import { FaShoppingBag } from "react-icons/fa";

const API = "https://e-commerce-backened-4fih.onrender.com/products";

const CategoryPage = () => {
  const { name } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();

       
        const categoryProducts = data.filter(
          (item) => item.category.toLowerCase() === name.toLowerCase()
        );

        setProducts(categoryProducts);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [name]);

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        {name.toUpperCase()} Products
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id || product._id}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <div className="h-60 sm:h-64 md:h-72 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image || Tshirt}
                  alt={product.title || "Product"}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-56">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                  {product.description || "No description available."}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-lg font-bold text-green-600">
                    ${product.price}
                  </p>
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 flex items-center gap-1">
                    <FaShoppingBag /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
