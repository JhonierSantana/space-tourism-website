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
    <div className="flex flex-col justify-center w-4/5 m-auto md:h-90vh md:mr-10">
      <h1 className="text-center md:text-left md:text-28px tracking-widest uppercase pt-[30px] md:pb-10 font-barlow-condensed md:ml-14">
        <span className="font-bold text-gray-500 pr-5">01</span> Pick Your
        Destination
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-8">
        <div className="md:w-47% flex justify-center">
          <img
            src={images[selectedDestination.name]}
            alt={selectedDestination.name}
            className="md:w-445p w-[170px] md:h-445p h-[170px] object-contain  mb-5 md:mb-0"
          />
        </div>
        <div className="w-full h-472p md:w-1/2  md:text-left">
          <div className="flex justify-center md:justify-start space-x-6 mb-8 font-barlow-condensed gap-3  text-grayy">
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
          <h2 className="md:text-100p text-[56px] text-center md:text-left tracking-widest font-bellefair uppercase mb-4 ">
            {selectedDestination.name}
          </h2>
          <p className="md:text-lg text-[15px] md:text-left text-center mb-8 md:mb-14 max-w-28rem font-barlow text-grayy">
            {selectedDestination.description}
          </p>
          <div className="flex border border-gray-600 border-solid h-0.5 md:w-57% mb-6 relative"></div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start space-y-5 md:space-y-0 md:space-x-16">
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
