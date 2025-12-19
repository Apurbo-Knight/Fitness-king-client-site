import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmarkPlus, CiCirclePlus, CiSaveDown1 } from "react-icons/ci";
import { CgCommunity, CgProfile } from "react-icons/cg";
import { RxActivityLog } from "react-icons/rx";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscGitStashApply } from "react-icons/vsc";
import { SiTrainerroad } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LuBookPlus } from "react-icons/lu";
import gym from "../assets/gym.png";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [role] = useRole();

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Fitness King | Dashboard</title>
      </Helmet>

      {/* Sidebar */}
      <div className="w-60 bg-gray-800 flex-shrink-0 flex flex-col p-6">
        <NavLink to="/" className="flex items-center gap-3 mb-10 hover:scale-105 transition-transform">
          <img className="w-8" src={gym} alt="logo" />
          <span className="text-xl font-bold text-teal-400">FITNESS KING</span>
        </NavLink>

        <ul className="flex-1 space-y-3">
          {role === "admin" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/allNewsletter"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <CiSaveDown1 /> All Subscriber
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allTrainers"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <SiTrainerroad /> All Trainers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/appliedTrainers"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <VscGitStashApply /> Applied Trainers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/balance"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <RiMoneyDollarCircleLine /> Balance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addNewClass"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <CiCirclePlus /> Add New Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addNewForum"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <CgCommunity /> Add New Forum
                </NavLink>
              </li>
            </>
          )}

          {role === "trainer" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/manageSlots"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <MdOutlineManageAccounts /> Manage Slots
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addNewSlots"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <LuBookPlus /> Add New Slots
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addNewForum"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <CgCommunity /> Add New Forum
                </NavLink>
              </li>
            </>
          )}

          {role === "member" && (
            <>
              <li>
                <NavLink
                  to="/dashboard/activityLog"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <RxActivityLog /> Activity Log
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <CgProfile /> Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookedTrainer"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors ${
                      isActive ? "bg-teal-400 text-black" : "text-white"
                    }`
                  }
                >
                  <CiBookmarkPlus /> Booked Trainer
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="mt-auto">
          <NavLink
            to="/"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-teal-500 transition-colors"
          >
            <IoHomeOutline /> Home
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-900">
        <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-md flex items-center gap-3">
          <FaArrowLeftLong className="text-teal-400 text-xl" />
          <h2 className="font-semibold text-white text-lg md:text-xl">
            Welcome To Our <span className="text-teal-400">Dashboard</span>
          </h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
