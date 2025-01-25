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
      // navigate(from, { replace: true });
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Succeessfull",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleGoogleSignIn = () => {
    // googleSignIn()
    // .then((res) => {
    //   console.log(res.user);
    //   const userInfo = {
    //     email: res.user?.email,
    //     name:res.user?.displayName
    //   }
    //   useAxiosPublic.post('/users',userInfo)
    //   .then(res=>{
    //     console.log(res.data);
    //     navigate('/');
    //   })
    // });
  };
  return (
    <div className="bg-black min-h-screen">
      <Helmet>
                      <title>
                          Fitness king | Login
                      </title>
                  </Helmet>
      <div className=" flex  justify-center items-center pt-52">
        <div className="card w-full border-2 border-teal-400 bg-teal-600 max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleLogin}
            className="card-body bg-teal-600 rounded-xl"
          >
            <h3 className="text-center font-bold text-3xl text-teal-900">
              Login
            </h3>
            <div className="">
              <label className="label">
                <span className="label-text text-teal-900 font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="w-full rounded-lg bg-teal-900 border border-teal-400"
                required
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text text-teal-900 font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="w-full rounded-lg bg-teal-900 border border-teal-400"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="w-full mt-6">
              <button className="btn w-full text-gray-400 bg-teal-900 hover:bg-teal-800 border border-teal-400">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <GoogleLogin></GoogleLogin>
          </div>
          <p className="text-center font-bold text-sm">
            <>
              New Here ?{" "}
              <Link to="/register" className="underline text-teal-900">
                Register
              </Link>
            </>
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

export default Login;
