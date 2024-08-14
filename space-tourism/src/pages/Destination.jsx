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
    <div className="flex flex-col w-4/5 m-auto h-screen">
      <h1 className="text-left text-xl tracking-wide uppercase">
        <span className="font-bold text-gray-400">01</span> Pick Your
        Destination
      </h1>
      <div className="flex flex-col">
        <div>
          <img
            src={images[selectedDestination.name]}
            alt={selectedDestination.name}
          />
        </div>
        <div>
          <div>
            {destinationData.destinations.map((destination) => (
              <button
                key={destination.name}
                onClick={() => handleDestinationChange(destination)}
              >
                {destination.name}
              </button>
            ))}
          </div>
          <h2>{selectedDestination.name}</h2>
          <p>{selectedDestination.description}</p>
          <div>
            <div>
              <h3>AVG. DISTANCE</h3>
              <p className="text-lg mb-2">
                Distance: {selectedDestination.distance}
              </p>
            </div>
            <div>
              <h2>AVG. TRAVEL TIME</h2>
              <p className="text-lg mb-2">
                Travel Time: {selectedDestination.travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
