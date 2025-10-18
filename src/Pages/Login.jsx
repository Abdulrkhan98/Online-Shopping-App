import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [icon, setIcon] = useState(false);
  const [login, setLogin] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login.name.trim() && login.password.trim()) {
      const res = await fetch("https://e-commerce-backened-4fih.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: login.name.toLowerCase(),
          password: login.password.toLowerCase(),
        }),
      });

      if (res.status === 200) navigate("/home");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 shadow-sm px-5 py-5 rounded-xl">
        <p className="text-gray-400 mt-2">Please enter your details</p>
        <h1 className="mt-3 text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-5 mt-5">
            <input
              className="border border-gray-400 rounded-xl p-3 w-80"
              type="text"
              placeholder="Enter your Name"
              name="name"
              required
              value={login.name}
              onChange={handleinputchange}
            />

            <div className="relative w-80">
              <input
                className="border p-3 w-full border-gray-400 rounded-xl pr-10"
                type={icon ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
                value={login.password}
                onChange={handleinputchange}
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

          <div className="flex justify-center gap-10 mt-8">
            <label className="flex items-center gap-1 text-gray-600">
              <input type="checkbox" /> Remember me
            </label>
            <p className="text-blue-600 underline cursor-pointer">
              Forgot password
            </p>
          </div>

          <div className="flex flex-col items-center mt-8 gap-5">
            <button className="bg-blue-600 px-10 py-3 text-white rounded-xl hover:bg-blue-500">
              Log in
            </button>
            <Link to="/signup">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <span className="text-blue-600 underline">Sign up</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
