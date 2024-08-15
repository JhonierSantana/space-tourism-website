import { useState } from "react";
import technologyData from "../data.json";
import launchVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceSport from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";

const images = {
  "Launch vehicle": launchVehicle,
  Spaceport: spaceSport,
  "Space capsule": spaceCapsule,
};

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(
    technologyData.technology[0]
  );

  const handleTechnologyChange = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="flex flex-col w-4/5 m-auto h-screen text-white">
      <h1 className="text-left text-3xl tracking-wide uppercase my-6">
        <span className="font-bold text-gray-400">03</span> SPACE LAUNCH 101
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <ul className="space-y-8">
            {technologyData.technology.map((technology, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`w-20 h-20 flex items-center justify-center rounded-full border-2 border-white text-lg font-bold p-4 ${
                    selectedTechnology.name === technology.name
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  }`}
                  onClick={() => handleTechnologyChange(technology)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 px-16">
          <h2 className="text-h5 font-barlow uppercase tracking-wide mb-4">
            THE TERMINOLOGY...
          </h2>

          <h3 className="text-4xl font-bellefair font-normal leading-tight text-left uppercase mb-6">
            {selectedTechnology.name}
          </h3>

          <p className="text-lg leading-relaxed">
            {selectedTechnology.description}
          </p>
        </div>
        <div className="flex-1 ml-0">
          <img
            src={images[selectedTechnology.name]}
            alt={selectedTechnology.name}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
