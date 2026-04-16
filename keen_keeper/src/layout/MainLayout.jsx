import React from "react";
import { Outlet } from "react-router";
import Navbar from "../component/share/navbar";
import Footer from "../component/share/footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Navbar />
      <Outlet />
      <ToastContainer position="top-center" />
      <Footer />
    </div>
  );
};

export default MainLayout;
