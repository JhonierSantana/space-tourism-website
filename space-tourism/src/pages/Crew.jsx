import crewData from "../data.json";
import { useState } from "react";
import douglasImage from "../assets/crew/image-douglas-hurley.webp";
import markImage from "../assets/crew/image-mark-shuttleworth.webp";
import victorImage from "../assets/crew/image-victor-glover.webp";
import anoushehImage from "../assets/crew/image-anousheh-ansari.webp";

const images = {
  "Douglas Hurley": douglasImage,
  "Mark Shuttleworth": markImage,
  "Victor Glover": victorImage,
  "Anousheh Ansari": anoushehImage,
};

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(crewData.crew[0]);

  const handlecrewChange = (crew) => {
    setSelectedCrew(crew);
  };

  return (
    <div className="flex items-center w-4/5 ml-auto h-90vh pl-20">
      <div className="mt-8 flex flex-col space-y-6 mr-20">
        <h1 className="text-left text-28px tracking-widest uppercase pb-10 font-barlow-condensed ">
          <span className="font-bold text-gray-500 pr-5">02</span> Meet your
          crew
        </h1>
        <div className="text-left pt-10 font-bellefair pb-10">
          <h3 className="text-32px  text-gray-400 uppercase">
            {selectedCrew.role}
          </h3>
          <h4 className="text-56px font-bellefair text-white mt-2 uppercase">
            {selectedCrew.name}
          </h4>
          <p className="text-lg font-barlow text-grayy mt-4 max-w-25rem">
            {selectedCrew.bio}
          </p>
        </div>
        <div className="flex space-x-4 pt-10">
          <ul className="flex gap-3">
            {crewData.crew.map((crew) => (
              <li className="" key={crew.name}>
                <a
                  href="#"
                  className={` 
                     flex items-center justify-center rounded-full border-2 border-none text-lg font-bold p-1.5 ${
                       selectedCrew.name === crew.name
                         ? "bg-white text-black"
                         : "bg-gray-700"
                     }`}
                  onClick={() => handlecrewChange(crew)}
                >
                  {}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative w-568.07px h-712px flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={images[selectedCrew.name]}
          alt={selectedCrew.name}
          className="h-auto object-contain mask-gradient"
        />
      </div>
    </div>
  );
};

export default Crew;
