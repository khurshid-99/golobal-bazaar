import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="w-full px-[5vw] py-[3vw] sm:py-0 ">
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          {/* This is logo */}
          <Link>
            <img src="./Slicing/Header/logo.png" alt="" />
          </Link>

          {/* this is nave link */}
          <ul className="flex items-center justify-center gap-x-7">
            <Link>Home</Link>
            <Link>About us</Link>
            <Link>Servis</Link>
            <Link>Eran</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
          </ul>

          {/* this is right side link */}
          <div className="flex items-center justify-center gap-x-7">
            <Link>Support</Link>
            <Link>
              <img src="./Slicing/Header/man-icon.png" alt="" />
            </Link>
            <Link>
              <img src="./Slicing/Header/cart-icon.png" alt="" />
            </Link>
            {/* this is search fild */}
            <div className="flex items-center justify-center gap-x-1">
              <label htmlFor="search">
                <img src="./Slicing/Header/search-icon.png" alt="" />
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search"
                className="outline-none w-15"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
