import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import backgroundHome from "../../assets/home/background-home-desktop.jpg";
import backgroundDestination from "../../assets/destination/background-destination-desktop.jpg";
import backgroundTechnology from "../../assets/technology/background-technology-desktop.jpg";
import backgroundCrew from "../../assets/crew/background-crew-desktop.jpg"; // replace with crew background image

const Layout = () => {
  const location = useLocation();

  let backgroundImage;

  switch (location.pathname) {
    case "/":
      backgroundImage = `url(${backgroundHome})`;
      break;
    case "/destination":
      backgroundImage = `url(${backgroundDestination})`;
      break;
    case "/technology":
      backgroundImage = `url(${backgroundTechnology})`;
      break;
    case "/crew":
      backgroundImage = `url(${backgroundCrew})`;
      break;
    default:
      backgroundImage = `url(${backgroundHome})`;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage }}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
