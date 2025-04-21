import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const NavMeiddle = () => {
  return (
    <>
    <div className="w-[10rem] py-1 lg:hidden flex items-center justify-center gap-x-1">
          <label htmlFor="search">
            <img src="/Slicing/Header/search-icon.png" alt="" />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>
      <ul className="hidden lg:flex items-center justify-center gap-x-7 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]"
          }
        >
          About us
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={"/servis"}
          className={({ isActive }) =>
            isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]"
          }
        >
          Servis
        </NavLink>
        <NavLink
          to={"/eran"}
          className={({ isActive }) =>
            isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]"
          }
        >
          Eran
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-[#ff7e00]" : "hover:text-[#ff7e00]"
          }
        >
          Contact
        </NavLink>
      </ul>
    </>
  );
};

export default NavMeiddle;
