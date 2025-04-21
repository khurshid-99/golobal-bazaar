import React from "react";

import NavLeft from "./navItems/NavLeft";
import NavMeiddle from "./navItems/NavMeiddle";
import NavRight from "./navItems/NavRight";

const NavBar = () => {
  return (
    <div className="w-full px-[5vw] sm:py-0 h-[4.6vw] ">
      <div className=" top-0 left-0 z-[999] bg-[#ffffff] drop-shadow-2xl fixed w-full px-[5vw]">
        <div className="flex items-center justify-between ">
          <NavLeft />
          <NavMeiddle />
          <NavRight />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
