import destinationData from "../data.json";
import { useState } from "react";
import moonImage from "../assets/destination/image-moon.webp";
import marsImage from "../assets/destination/image-mars.webp";
import europaImage from "../assets/destination/image-europa.webp";
import titanImage from "../assets/destination/image-titan.webp";

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
    <div className="flex flex-col justify-center w-4/5 m-auto h-90vh mr-10">
      <h1 className="text-left text-28px tracking-widest uppercase pb-10 font-barlow-condensed ml-14">
        <span className="font-bold text-gray-500 pr-5">01</span> Pick Your
        Destination
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full  mt-8">
        <div className="w-full md:w-47% flex justify-center">
          <img
            src={images[selectedDestination.name]}
            alt={selectedDestination.name}
            className="w-445p h-445p object-contain"
          />
        </div>
        <div className="w-full h-472p md:w-1/2 md:text-left">
          <div className="flex md:justify-start space-x-6 mb-8 font-barlow-condensed gap-3  text-grayy">
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
          <h2 className="text-100p tracking-widest font-bellefair uppercase mb-4 ">
            {selectedDestination.name}
          </h2>
          <p className="text-lg mb-14 max-w-28rem font-barlow text-grayy">
            {selectedDestination.description}
          </p>
          <div className="flex border border-gray-600 border-solid h-0.5 w-57% mb-6 relative"></div>
          <div className="flex justify-center md:justify-start space-x-16">
            <div>
              <h3 className="text-14px tracking-wide mb-3 text-grayy">
                AVG. DISTANCE
              </h3>
              <p className="text-28px font-bellefair uppercase">
                {selectedDestination.distance}
              </p>
            </div>
            <div>
              <h2 className="text-14px mb-3  text-grayy">EST. TRAVEL TIME</h2>
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
