import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/share/navbar";
import Footer from "../component/share/footer";

const MainLayout = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Navbar />
      <Outlet />
      <Footer />
      
    </div>
  );
};

export default MainLayout;