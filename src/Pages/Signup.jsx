import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [icon, setIcon] = useState(false);
  const [contact, setContact] = useState({ name: "", password: "" });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact.name.trim() && contact.password.trim()) {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: contact.name.toLowerCase(),
          password: contact.password.toLowerCase(),
        }),
      });
      console.log(res.status);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 shadow-sm px-5 py-5 rounded-xl">
        <p className="mt-2 text-gray-400">Please enter your details</p>
        <h1 className="mt-3 text-2xl font-bold">Create Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-5 mt-5">
            <input
              className="border border-gray-400 rounded-xl p-3 w-80"
              type="text"
              placeholder="Enter your Name"
              name="name"
              required
              value={contact.name}
              onChange={handleinput}
            />

            <div className="relative w-80">
              <input
                className="border p-3 w-full border-gray-400 rounded-xl pr-10"
                type={icon ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
                value={contact.password}
                onChange={handleinput}
              />
              {icon ? (
                <FaEyeSlash
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={() => setIcon(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                  onClick={() => setIcon(true)}
                />
              )}
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <label className="flex items-center gap-1 text-gray-600">
              <input type="checkbox" /> I agree to terms
            </label>
            <p className="text-blue-600 underline cursor-pointer">
              Forgot password
            </p>
          </div>

          <div className="flex flex-col items-center mt-8 gap-5">
            <button className="bg-blue-600 px-10 py-3 text-white rounded-xl hover:bg-blue-500">
              Sign up
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border border-gray-400 rounded-xl">
              <FaGoogle /> Sign in with Google
            </button>
            <Link to="/login">
              <p className="text-gray-400">
                Already have an account?{" "}
                <span className="text-blue-600 underline">Log in</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
