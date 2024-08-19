import crewData from "../data.json";
import { useState } from "react";
import douglasImage from "/crew/image-douglas-hurley.webp";
import markImage from "/crew/image-mark-shuttleworth.webp";
import victorImage from "/crew/image-victor-glover.webp";
import anoushehImage from "/crew/image-anousheh-ansari.webp";

const images = {
  "Douglas Hurley": douglasImage,
  "Mark Shuttleworth": markImage,
  "Victor Glover": victorImage,
  "Anousheh Ansari": anoushehImage,
};

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(crewData.crew[0]);

  const handleCrewChange = (crew) => {
    setSelectedCrew(crew);
  };

  return (
    <div className="flex flex-col items-center md:items-start mt-10 md:mt-5 w-4/5 md:w-9/12 justify-between m-auto h-full md:h-90vh">
      <h1 className="md:w-4/5 md:m-auto md:absolute flex text-center md:text-left md:text-28px tracking-widest uppercase mt-10 md:mt-16 md:ml-32 font-barlow-condensed">
        <span className="font-bold text-gray-500 pr-5">02</span> Meet your crew
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center w-full justify-between mt-10">
        <div className="flex flex-col items-center md:items-start md:order-none md:ml-32">
          <div className="text-center md:text-left pt-10 font-bellefair pb-10">
            <h3 className="md:text-32px text-gray-400 uppercase">
              {selectedCrew.role}
            </h3>
            <h4 className="text-[24px] md:text-56px font-bellefair text-white mt-2 uppercase">
              {selectedCrew.name}
            </h4>
            <p className="text-[15px] mdtext-lg font-barlow text-grayy mt-4 max-w-[23rem]">
              {selectedCrew.bio}
            </p>
          </div>

          <div className="flex space-x-4 pt-10">
            <ul className="flex gap-3">
              {crewData.crew.map((crew) => (
                <li key={crew.name}>
                  <a
                    href="#"
                    className={`flex items-center justify-center rounded-full border-2 border-none text-lg font-bold p-1.5 ${
                      selectedCrew.name === crew.name
                        ? "bg-white text-black"
                        : "bg-gray-700"
                    }`}
                    onClick={() => handleCrewChange(crew)}
                  >
                    {}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative  flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={images[selectedCrew.name]}
            alt={selectedCrew.name}
            className=" object-contain mask-gradient md:w-568.07px w-[327px] h-[223px] md:h-712px"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
