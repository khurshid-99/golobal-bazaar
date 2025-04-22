import React, { useRef, useState } from "react";

import NavLeft from "./navItems/NavLeft";
import NavMeiddle from "./navItems/NavMeiddle";
import NavRight from "./navItems/NavRight";
import gsap from "gsap";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchOpenRaf = useRef();
  const HandleOpenSearch = () => {
    gsap.to(searchOpenRaf.current, {
      bottom: "-3rem",
      opacity: 1,
    });
  };

  const HandleClose = (e) => {
    if (e.key === "Enter") {
      gsap.to(searchOpenRaf.current, {
        bottom: "30",
        opacity: 0,
      });
    } else if (e.target.nodeName === "IMG") {
      gsap.to(searchOpenRaf.current, {
        bottom: "30",
        opacity: 0,
      });
    }
  };

  const HandleClearInput = () => {
    setSearchValue("");
  };

  return (
    <div className="w-full px-[5vw] sm:py-0 h-[4.6vw] relative ">
      <div className=" top-0 left-0 z-[999] bg-[#ffffff] drop-shadow-2xl fixed w-full px-[5vw]">
        <div className="flex items-center justify-between relative z-[999] ">
          <NavLeft />
          <NavMeiddle fn={HandleOpenSearch} />
          <NavRight fn={HandleOpenSearch} />
        </div>
        {/* Search bar */}
        <div className="px-[5vw] relative ">
          <div
            ref={searchOpenRaf}
            className="absolute w-full bottom-30 opacity-0 left-0 px-5 z-[888] flex items-center justify-between bg-[#ffffff] rounded-[50px] "
          >
            <input
              onKeyDown={HandleClose}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type="text"
              placeholder="Search"
              className="w-full  py-2 outline-none text-[1.3rem] "
            />
            <div className="flex items-center gap-x-5">
              {searchValue.length > 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="black"
                  onClick={HandleClearInput}
                >
                  <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                </svg>
              )}
              <img
                onClick={HandleClose}
                src="/Slicing/Header/search-icon.png"
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
