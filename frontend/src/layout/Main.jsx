import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
