import { Link } from "react-router";
import SideNav from "./SideNav";

const NavRight = ({ fn }) => {
  return (
    <div className="">
      {/* side Nav */}
      <SideNav />
      {/* web-nav */}
      <div className="hidden lg:flex items-center justify-center gap-x-7 relative ">
        <Link>Support</Link>
        <Link>
          <img src="/Slicing/Header/man-icon.png" alt="" />
        </Link>
        <Link>
          <img src="/Slicing/Header/cart-icon.png" alt="" />
        </Link>
        {/* this is search fild */}
        <div
          onClick={fn}
          className="flex items-center justify-center gap-x-1 cursor-pointer  "
        >
          <label htmlFor="searche">
            <img src="/Slicing/Header/search-icon.png" alt="" />
          </label>
          <h2 id="searche" className="text-[#787575]">
            Search
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NavRight;
