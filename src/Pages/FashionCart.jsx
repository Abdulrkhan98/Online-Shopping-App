import React, { useEffect, useState } from "react";

const API = "https://e-commerce-backened-4fih.onrender.com/products";

const FashionCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {products.length > 0 ? (
        products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition h-[400px]"
          >
            
            <div className="h-[180px] w-full overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between p-3">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-3">
                {item.description}
              </p>
              <span className="text-lg font-bold text-green-600 mt-2">
                ${item.price}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center">
          Loading products...
        </p>
      )}
    </div>
  );
};

export default FashionCart;
