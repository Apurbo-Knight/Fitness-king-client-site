import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import GoogleLogin from "../../Components/GoogleLogin";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4">
      <Helmet>
        <title>Fitness King | Login</title>
      </Helmet>

      <div className="w-full max-w-sm bg-teal-600 border-2 border-teal-400 rounded-xl shadow-2xl">
        <form
          onSubmit={handleLogin}
          className="p-6 rounded-xl flex flex-col space-y-4"
        >
          <h3 className="text-center text-3xl font-bold text-teal-900 mb-4">
            Login
          </h3>

          {/* Email Field */}
          <div className="flex flex-col">
            <label className="text-teal-900 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-2 rounded-lg bg-teal-900 border border-teal-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label className="text-teal-900 font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="p-2 rounded-lg bg-teal-900 border border-teal-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <label className="mt-1">
              <a href="#" className="text-sm text-teal-200 hover:underline">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-900 text-gray-400 border border-teal-400 rounded-lg hover:bg-teal-800 transition"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="text-center my-4">
          <GoogleLogin />
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-200 mb-2">
          New here?{" "}
          <Link to="/register" className="underline text-teal-900 font-semibold">
            Register
          </Link>
        </p>

        {/* Home Link */}
        <div className="flex justify-center pb-4">
          <Link to="/" className="text-teal-400 text-xl">
            <FaHome />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
