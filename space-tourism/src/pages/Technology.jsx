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
    <div className="flex flex-col items-center md:items-start justify-center lg:w-4/5 lg:m-auto lg:h-90vh lg:mr-10 mt-14 lg:mt-0">
      <h1 className="text-center lg:text-left lg:text-28px md:text-[20px] lg:mb-24 tracking-widest uppercase lg:pb-2 md:pb-10 pb-2 font-barlow-condensed lg:ml-4 md:ml-14">
        <span className="font-bold text-gray-400 pr-5">03</span> SPACE LAUNCH
        101
      </h1>
      <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start mt-10 md:mt-0 w-full">
        <div className="flex flex-col items-center lg:items-start lg:mr-8 mt-10 lg:mt-0">
          <ul className="flex items-end lg:md:flex-col lg:gap-0 gap-4 lg:space-y-8 ">
            {technologyData.technology.map((technology, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`lg:w-20 lg:h-20 md:w-[60px] md:h-[60px] w-[40px] h-[40px]  flex items-center justify-center rounded-full border-2 border-gray-700 text-lg p-4 ${
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
        <div className="flex-1 flex flex-col items-center lg:items-start w-4/5 m-auto lg:w-0 lg:m-0">
          <h2 className="text-[14px] md:text-h5 font-barlow-condensed uppercase tracking-wide mb-2 text-gray-400 text-center md:text-left">
            THE TERMINOLOGY...
          </h2>

          <h3 className="text-[24px] lg:text-[56px] md:text-[40px] font-bellefair font-normal leading-tight text-center md:text-left uppercase mb-6">
            {selectedTechnology.name}
          </h3>

          <p className="lg:text-[18px] md:text-[16px] text-[15px] leading-relaxed font-barlow lg:max-w-[440px] max-w-[445px] text-gray-400 lg:text-left text-center">
            {selectedTechnology.description}
          </p>
        </div>
        <div className="relative w-full lg:w-[515px] h-auto mb-10 lg:mb-0 lg:mt-[-30px] lg:flex-1">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={images[selectedTechnology.name].mobile}
            />
            <img
              src={images[selectedTechnology.name].desktop}
              alt={selectedTechnology.name}
              className="w-[100%] lg:w-515px lg:h-527px md:h-[310px] h-auto object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Technology;
