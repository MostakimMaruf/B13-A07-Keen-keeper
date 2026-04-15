import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/share/navbar";
import Footer from "../component/share/footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;