import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="lg:pt-12 md:pt-0 pt-12 pl-12 justify-between items-center relative flex">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div>
          <img
            src={logo}
            alt="logo"
            className="md:w-12 md:h-12 h-[40px] w-[40px]"
          />
        </div>
        <HamburgerMenu />
      </div>

      <div className="lg:flex md:hidden hidden border border-gray-600 border-solid h-0.5 w-38% ml-44 absolute z-10"></div>

      <div className="hidden md:flex bg-opacity-10 bg-white h-24 lg:w-[54%] md:w-[65%] items-center backdrop-blur-md relative">
        <ul className="flex font-barlow-condensed lg:gap-10 md:gap-0 text-white tracking-widest w-max m-auto ">
          <li className="relative md:ml-16 lg:ml-24">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : ""
              }
            >
              <span className="mr-1 lg:inline md:hidden">00</span> HOME
            </NavLink>
          </li>
          <li className="relative ml-10">
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : ""
              }
            >
              <span className="mr-1 lg:inline md:hidden">01</span> DESTINATION
            </NavLink>
          </li>
          <li className="relative ml-10">
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : ""
              }
            >
              <span className="mr-1 lg:inline md:hidden">02</span> CREW
            </NavLink>
          </li>
          <li className="relative ml-10 mr-56">
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : ""
              }
            >
              <span className="mr-1 lg:inline md:hidden">03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
