
import { Link } from "react-router";
import SideNav from "./SideNav";

const NavRight = () => {


  return (
    <div>
      {/* side Nav */}
      <SideNav />
      {/* web-nav */}
      <div className="hidden lg:flex items-center justify-center gap-x-7 ">
        <Link>Support</Link>
        <Link>
          <img src="/Slicing/Header/man-icon.png" alt="" />
        </Link>
        <Link>
          <img src="/Slicing/Header/cart-icon.png" alt="" />
        </Link>
        {/* this is search fild */}
        <div className="flex items-center justify-center gap-x-1">
          <label htmlFor="search">
            <img src="/Slicing/Header/search-icon.png" alt="" />
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
  );
};

export default NavRight;
