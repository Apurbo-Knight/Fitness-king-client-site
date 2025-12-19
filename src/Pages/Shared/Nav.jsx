import React, { useContext } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoSignIn } from "react-icons/go";
import { FaRegRegistered } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import gym from "../../assets/gym.png";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      fluid
      rounded
      className="fixed w-full z-50 bg-black/70 backdrop-blur-md shadow-md"
    >
      {/* Logo */}
      <Navbar.Brand href="/">
  <div className="flex items-center gap-2">
    <img className="w-10 h-10 object-contain" src={gym} alt="Fitness King" />
    <span className="text-teal-400 text-xl font-bold whitespace-nowrap">
      FITNESS KING
    </span>
  </div>
</Navbar.Brand>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4 md:order-2">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
              src={user?.photoURL}
              alt={user?.displayName || "User"}
              title={user?.displayName || "User"}
            />
            <button
              onClick={handelLogOut}
              className="p-2 rounded-full hover:bg-teal-400 hover:text-black transition"
              title="Logout"
            >
              <MdLogout size={28} />
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="p-2 rounded-full hover:bg-teal-400 hover:text-black transition"
              title="Login"
            >
              <GoSignIn size={28} />
            </Link>
            <Link
              to="/register"
              className="p-2 rounded-full hover:bg-teal-400 hover:text-black transition"
              title="Register"
            >
              <FaRegRegistered size={28} />
            </Link>
          </>
        )}
        <Navbar.Toggle />
      </div>

      {/* Navigation Links */}
      <Navbar.Collapse className="text-white bg-black/80 md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0">
        <NavLink
          to="/"
          className="font-semibold text-teal-400 hover:text-teal-300 transition"
        >
          Home
        </NavLink>
        <NavLink
          to="/allTrainers"
          className="font-semibold text-teal-400 hover:text-teal-300 transition"
        >
          All Trainer
        </NavLink>
        <NavLink
          to="/allClassesPage"
          className="font-semibold text-teal-400 hover:text-teal-300 transition"
        >
          All Classes
        </NavLink>
        {user && (
          <NavLink
            to="/dashboard"
            className="font-semibold text-teal-400 hover:text-teal-300 transition"
          >
            Dashboard
          </NavLink>
        )}
        <NavLink
          to="/community"
          className="font-semibold text-teal-400 hover:text-teal-300 transition"
        >
          Community
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
