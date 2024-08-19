import { useState, useEffect } from "react";
import navLinks from "./navLinks";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <div className="relative md:hidden flex mr-12 z-30">
      <div className="cursor-pointer z-20" onClick={toggleMenu}>
        <div
          className={`w-8 h-1 bg-white my-1 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white my-1 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white my-1 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></div>
      </div>

      <nav
        className={`fixed top-0 right-0 h-screen w-[70%] bg-opacity-0 backdrop-blur-[50px] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center font-barlow-condensed h-[80%] gap-10 ml-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-white text-[26px]"
                onClick={toggleMenu}
              >
                <span className="font-bold mr-3">{link.number}</span>{" "}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
