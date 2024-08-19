import destinationData from "../data.json";
import { useState } from "react";
import moonImage from "/destination/image-moon.webp";
import marsImage from "/destination/image-mars.webp";
import europaImage from "/destination/image-europa.webp";
import titanImage from "/destination/image-titan.webp";

const images = {
  Moon: moonImage,
  Mars: marsImage,
  Europa: europaImage,
  Titan: titanImage,
};

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    destinationData.destinations[0]
  );

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="flex flex-col justify-center lg:w-4/5 lg:m-auto md:w-full w-4/5 m-auto lg:h-90vh md:h-auto md:mr-10">
      <h1 className="text-center md:text-left lg:text-[28px] md:text-[20px] lg:mt-0 md:mt-5 tracking-widest uppercase pt-[30px] pb-5 md:pb-10 font-barlow-condensed md:ml-14">
        <span className="font-bold text-gray-500 pr-5">01</span> Pick Your
        Destination
      </h1>
      <div className="flex lg:flex-row md:flex-col flex-col items-center justify-between w-full">
        <div className="md:w-47% flex justify-center">
          <img
            src={images[selectedDestination.name]}
            alt={selectedDestination.name}
            className="lg:w-[445px] lg:h-[445px] md:w-[300px] md:h-[300px] w-[170px]  h-[170px] object-contain lg:mb-0 md:mb-10 mb-5"
          />
        </div>
        <div className="w-full h-472p md:w-1/2 lg:text-left">
          <div className="flex justify-center lg:justify-start md-justify-center space-x-6 mb-8 font-barlow-condensed gap-3  text-grayy">
            {destinationData.destinations.map((destination) => (
              <button
                key={destination.name}
                onClick={() => handleDestinationChange(destination)}
                className={`uppercase tracking-wider ${
                  selectedDestination.name === destination.name
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                {destination.name}
              </button>
            ))}
          </div>
          <h2 className="lg:text-[100px] md:text-[80px] text-[56px] lg:text-left text-center tracking-widest font-bellefair uppercase mb-4 ">
            {selectedDestination.name}
          </h2>
          <p className="lg:text-lg md:text-[16px] text-[15px] lg:text-left text-center mb-8 md:mb-14 max-w-28rem font-barlow text-grayy">
            {selectedDestination.description}
          </p>
          <div className="flex border border-gray-600 border-solid h-0.5 lg:w-57% mb-6 relative"></div>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center md:items-start lg:justify-start space-y-5 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-14px text-center md:text-left tracking-wide mb-3 text-grayy">
                AVG. DISTANCE
              </h3>
              <p className="text-28px font-bellefair uppercase">
                {selectedDestination.distance}
              </p>
            </div>
            <div>
              <h2 className="text-14px mb-3 text-grayy text-center md:text-left">
                EST. TRAVEL TIME
              </h2>
              <p className="text-28px font-bellefair  uppercase">
                {selectedDestination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
