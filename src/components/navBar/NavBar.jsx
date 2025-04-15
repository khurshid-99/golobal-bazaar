import React from "react";

import NavLeft from "./navItems/NavLeft";
import NavMeiddle from "./navItems/NavMeiddle";
import NavRight from "./navItems/NavRight";

const NavBar = () => {
  return (
    <div className="w-full px-[5vw] py-[3vw] sm:py-0 ">
      <div className="flex items-center justify-between">
        <NavLeft />
        <NavMeiddle />
        <NavRight />
      </div>
    </div>
  );
};

export default NavBar;
