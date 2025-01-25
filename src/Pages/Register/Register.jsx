import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import GoogleLogin from "../../Components/GoogleLogin";
import { FaHome } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data.name, data.email, data.password, data.photoURL);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User Profile info updated");
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
            role: "member",
          };
          axios.post("https://assignment-12-server-iota-ruby.vercel.app/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User added to DB Succeessfull");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Succeessfull",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };
  return (
    <div className="">
      <div className=" flex justify-center items-center pt-30 bg-black min-h-screen">
        <div className=" bg-teal-600 border-2 border-teal-400 rounded-xl w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="font-bold text-teal-900 text-3xl text-center">
            Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="rounded-md bg-teal-900 border border-teal-400"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="rounded-md bg-teal-900 border border-teal-400"
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-600">Photo URL is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="rounded-md bg-teal-900 border border-teal-400"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="password"
                className="rounded-md bg-teal-900 border border-teal-400"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 character</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 character
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one upper case one lowercase one number and
                  one special character
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-teal-900 border border-teal-400 text-gray-500 hover:bg-teal-800">
                Register
              </button>
            </div>
          </form>
          <div className="text-center mb-3">
            <GoogleLogin></GoogleLogin>
          </div>
          <p className="text-xs text-center font-bold">
            Already Have an account?{" "}
            <Link className="text-xs underline text-teal-900" to="/login">
              Login here
            </Link>
          </p>
          <div className="flex justify-center my-2 ">
            <Link to={"/"}>
              <FaHome />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
