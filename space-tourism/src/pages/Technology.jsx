import { useState } from "react";
import technologyData from "../data.json";
import launchVehicle from "/technology/image-launch-vehicle-portrait.jpg";
import spaceSport from "/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "/technology/image-space-capsule-portrait.jpg";

const images = {
  "Launch vehicle": {
    desktop: launchVehicle,
    mobile: "/technology/image-launch-vehicle-landscape.jpg",
  },
  Spaceport: {
    desktop: spaceSport,
    mobile: "/technology/image-spaceport-landscape.jpg",
  },
  "Space capsule": {
    desktop: spaceCapsule,
    mobile: "/technology/image-space-capsule-landscape.jpg",
  },
};

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(
    technologyData.technology[0]
  );

  const handleTechnologyChange = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="flex flex-col items-center md:items-start justify-center md:w-4/5 md:m-auto md:h-90vh md:mr-10 mt-14 md:mt-0">
      <h1 className="text-center md:text-left md:text-28px md:mb-24 tracking-widest uppercase pb-2 font-barlow-condensed md:ml-4">
        <span className="font-bold text-gray-400 pr-5">03</span> SPACE LAUNCH
        101
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start mt-10 md:mt-0 w-full">
        <div className="flex flex-col items-center md:items-start md:mr-8 mt-10 md:mt-0">
          <ul className="flex items-end md:md:flex-col gap-4 md:gap-0 md:space-y-8 ">
            {technologyData.technology.map((technology, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`w-[40px] h-[40px] md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-gray-700 text-lg p-4 ${
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
        <div className="flex-1 flex flex-col items-center md:items-start w-4/5 m-auto md:w-0 md:m-0">
          <h2 className="text-[14px] md:text-h5 font-barlow-condensed uppercase tracking-wide mb-2 text-gray-400 text-center md:text-left">
            THE TERMINOLOGY...
          </h2>

          <h3 className="text-[24px] md:text-5xl font-bellefair font-normal leading-tight text-center md:text-left uppercase mb-6">
            {selectedTechnology.name}
          </h3>

          <p className="text-[15px] md:text-lg leading-relaxed font-barlow max-w-[445px] text-gray-400 text-center md:text-left">
            {selectedTechnology.description}
          </p>
        </div>
        <div className="relative w-full md:w-[515px] h-auto mb-10 md:mb-0 md:mt-[-30px] md:flex-1">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={images[selectedTechnology.name].mobile}
            />
            <img
              src={images[selectedTechnology.name].desktop}
              alt={selectedTechnology.name}
              className="w-[99.6%] md:w-515px md:h-527px h-auto object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Technology;
