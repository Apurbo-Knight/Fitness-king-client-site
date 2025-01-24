import React, { useContext } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoSignIn } from "react-icons/go";
import { FaCashRegister, FaRegRegistered } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import gym from "../../assets/gym.png"

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar className="fixed w-full bg-transparent backdrop-blur-2xl z-10">
      <Navbar.Brand>
        <Link to={"/"}>
          <div className="flex itmes-center gap-2">
            <img className="w-8" src={gym} alt="" />
            <span className="text-teal-400 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              FITNESS KING
            </span>
          </div>
        </Link>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        {user ? (
          <div className="flex items-center gap-4 ">
            <img
              className="w-14 h-14 rounded-full border-2 border-teal-400"
              src={user?.photoURL}
              alt=""
            />
            <Link onClick={handelLogOut}>
              <MdLogout color="cyan" size={30} />
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">
              <GoSignIn color="cyan" size={30} />
            </Link>
            <Link to="/register">
              <FaRegRegistered color="cyan" size={30} />
            </Link>
          </>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-white ">
        <NavLink className={" text-teal-400 font-semibold"}>Home</NavLink>
        <NavLink to="allTrainers" className={"font-semibold text-teal-400"}>
          All Trainer
        </NavLink>
        <NavLink to="/allClassesPage" className={"font-semibold text-teal-400"}>
          All Classes
        </NavLink>
        { user && <NavLink to="/dashboard" className={"font-semibold text-teal-400"}>
          Dashboard
        </NavLink>}
        <NavLink to="/community" className={"font-semibold text-teal-400"}>
          Community
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
