import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/HomePage";
import Hoodies from "./Pages/Hoodies";
import Cart from "./Pages/Cart";
import CategoryPage from "./Pages/CategoryPage";

const App = () => {
  return (
    <div className="bg-white min-h-screen w-full text-gray-900">
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
