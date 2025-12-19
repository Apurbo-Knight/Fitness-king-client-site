import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import GoogleLogin from "../../Components/GoogleLogin";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;

      await updateUserProfile(data.name, data.photoURL);

      // Create user in DB
      const userInfo = {
        name: data.name,
        email: data.email,
        image: data.photoURL,
        role: "member",
      };

      const res = await axios.post(
        "https://assignment-12-server-iota-ruby.vercel.app/users",
        userInfo
      );

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-10 px-4">
      <Helmet>
        <title>Fitness King | Register</title>
      </Helmet>

      <div className="bg-teal-600 border-2 border-teal-400 rounded-xl w-full max-w-sm shadow-2xl p-6">
        <h2 className="text-center text-3xl font-bold text-teal-900 mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-white mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full p-2 rounded-md bg-teal-900 border border-teal-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-white mb-1">Photo URL</label>
            <input
              type="text"
              {...register("photoURL", { required: "Photo URL is required" })}
              placeholder="Photo URL"
              className="w-full p-2 rounded-md bg-teal-900 border border-teal-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.photoURL && (
              <p className="text-red-600 text-sm mt-1">{errors.photoURL.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="w-full p-2 rounded-md bg-teal-900 border border-teal-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be less than 20 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  message:
                    "Password must have one uppercase, one lowercase, one number, and one special character",
                },
              })}
              placeholder="Password"
              className="w-full p-2 rounded-md bg-teal-900 border border-teal-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-teal-900 border border-teal-400 text-gray-200 rounded-md hover:bg-teal-800 transition"
          >
            Register
          </button>
        </form>

        <div className="text-center my-4">
          <GoogleLogin />
        </div>

        <p className="text-xs text-center text-gray-200">
          Already have an account?{" "}
          <Link className="underline text-teal-900" to="/login">
            Login here
          </Link>
        </p>

        <div className="flex justify-center mt-3">
          <Link to="/" className="text-teal-400 text-xl">
            <FaHome />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
