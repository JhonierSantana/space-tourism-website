import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex pt-12 pl-12 justify-between items-center ">
      <div>
        <img src={logo} alt="logo" className="w-12 h-12" />
      </div>
      <div className="flex border border-gray-600 border-solid h-0.5 w-2/5 ml-32 absolute z-10"></div>
      <div className="flex bg-opacity-10 bg-white h-24 w-54p items-center backdrop-blur-md">
        <ul className="flex font-barlow-condensed  space-x-8 text-white tracking-widest w-max m-auto ">
          <li className="relative mr-10 ml-24 hover:cursor-pointer">
            <Link to="/">
              <span className="mr-1">00</span> HOME
            </Link>
          </li>
          <li className="relative  hover:cursor-pointer">
            <Link to="/destination">
              <span className="mr-1">01</span>
              DESTINATION
            </Link>
          </li>
          <li className="relative pl-10  hover:cursor-pointer">
            <span className="mr-1">02</span> CREW
          </li>
          <li className="relative  pl-10 pr-56 hover:cursor-pointer">
            <span className="mr-1">03</span> TECHNOLOGY
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
