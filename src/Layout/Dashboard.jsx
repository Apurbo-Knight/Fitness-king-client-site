import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmarkPlus, CiCirclePlus, CiSaveDown1 } from "react-icons/ci";
import { CgCommunity, CgProfile } from "react-icons/cg";
import { RxActivityLog } from "react-icons/rx";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscGitStashApply } from "react-icons/vsc";
import { SiTrainerroad } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuBookPlus } from "react-icons/lu";
import gym from "../assets/gym.png"
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [role] = useRole();
  console.log(role);
  return (
    <div className="flex bg-black">
      <Helmet>
                      <title>
                          Fitness king | Dashboard
                      </title>
                  </Helmet>
      <div className="w-52 min-h-screen text-white font-semibold  bg-teal-400">
        <ul className="menu">
          <li>
            <NavLink to={"/"}>
              <div className="flex items-center gap-2 mb-5">
              <img className="w-8" src={gym} alt="" /> FITNESS KING
              </div>
            </NavLink>
          </li>
          {role === "admin" && (
            <>
              <li>
                <NavLink className="text-lg" to="/dashboard/allNewsletter">
                <CiSaveDown1 /> All  Subscriber
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/allTrainers">
                <SiTrainerroad /> All Trainers
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/appliedTrainers">
                <VscGitStashApply /> Applied Trainers
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/balance">
                <RiMoneyDollarCircleLine /> Balance
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/addNewClass">
                <CiCirclePlus /> Add New Class
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/addNewForum">
                <CgCommunity /> Add New Forum
                </NavLink>
              </li>
            </>
          )}
          {role === "trainer" && (
            <>
              <li>
                <NavLink className="text-lg" to="/dashboard/manageSlots">
                <MdOutlineManageAccounts />  Manage Slots
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/addNewSlots">
                <LuBookPlus /> Add New Slots
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/addNewForum">
                <CgCommunity /> Add New Forum
                </NavLink>
              </li>
            </>
          )}
          {role === "member" && (
            <>
              <li>
                <NavLink className="text-lg" to="/dashboard/activityLog">
                <RxActivityLog />  Activity Log
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/profile">
                <CgProfile />  Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to="/dashboard/bookedTrainer">
                <CiBookmarkPlus /> Booked Trainer
                </NavLink>
              </li>
            </>
          )}
          <div className="divider "></div>
          <li>
            <NavLink className="text-lg " to="/">
              
                <p className="flex items-center gap-2"><IoHomeOutline /> Home</p>
              
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h2 className="font-semibold text-gray-600 flex items-center gap-2">
          <FaArrowLeftLong /> Welcome To Our{" "}
          <span className="text-teal-400"> Dashboard</span>
        </h2>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
