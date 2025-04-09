import React from "react";
import { Footer, NavBar } from "./index";
import { Outlet } from "react-router";

const AppLayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayOut;
