import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/share/navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;