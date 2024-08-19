import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import "../../index.css";

const Layout = () => {
  const location = useLocation();

  let backgroundClass = "";

  switch (location.pathname) {
    case "/":
      backgroundClass = "home-bg";
      break;
    case "/destination":
      backgroundClass = "destination-bg";
      break;
    case "/technology":
      backgroundClass = "technology-bg";
      break;
    case "/crew":
      backgroundClass = "crew-bg";
      break;
    default:
      backgroundClass = "home-bg";
  }

  return (
    <div
      className={`min-h-screen bg-cover bg-center text-white ${backgroundClass}`}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
