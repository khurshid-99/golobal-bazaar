import React from "react";
import { Link } from "react-router";

const NavLeft = () => {
  return (
    <Link to={"/"} className="w-[8rem] lg:w-[15rem] ">
      <img src="/Slicing/Header/logo.png" alt="" className="object-cover object-center  " />
    </Link>
  );
};

export default NavLeft;
