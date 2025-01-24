import React from "react";
import { Outlet } from "react-router-dom";
import Foot from "../Pages/Shared/Foot";
import Nav from "../Pages/Shared/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default MainLayout;
