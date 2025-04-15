import React from "react";
import { Footer, NavBar } from "./index";
import { Outlet } from "react-router";

const AppLayOut = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayOut;
