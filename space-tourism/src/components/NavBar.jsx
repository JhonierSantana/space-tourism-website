import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex pt-12 pl-12 justify-between items-center relative">
      <div>
        <img src={logo} alt="logo" className="w-12 h-12" />
      </div>

      <div className="flex border border-gray-600 border-solid h-0.5 w-2/5 ml-32 absolute z-10"></div>

      <div className="flex bg-opacity-10 bg-white h-24 w-54p items-center backdrop-blur-md relative">
        <ul className="flex font-barlow-condensed gap-10 text-white tracking-widest w-max m-auto ">
          <li className="relative ml-24">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : "hover:text-gray-400 hover:underline"
              }
            >
              <span className="mr-1">00</span> HOME
            </NavLink>
          </li>
          <li className="relative ml-10">
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : "hover:text-gray-400 hover:underline"
              }
            >
              <span className="mr-1">01</span> DESTINATION
            </NavLink>
          </li>
          <li className="relative ml-10">
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : "hover:text-gray-400 hover:underline"
              }
            >
              <span className="mr-1">02</span> CREW
            </NavLink>
          </li>
          <li className="relative ml-10 mr-56">
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-300 after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white"
                  : "hover:text-gray-400 hover:underline"
              }
            >
              <span className="mr-1">03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
