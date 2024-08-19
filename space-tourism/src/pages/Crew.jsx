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
    <div className="flex flex-col items-center md:items-start mt-10 md:mt-5 lg:w-9/12 md:w-full w-4/5 justify-between m-auto h-full lg:h-90vh">
      <h1 className="md:w-4/5 md:m-auto lg:absolute flex text-center md:text-left lg:text-28px md:text-[20px] tracking-widest uppercaselg:mt-16 md:mt-[2rem]  mt-8 lg:ml-32 md:ml-[3rem] font-barlow-condensed">
        <span className="font-bold text-gray-500 pr-5">02</span> Meet your crew
      </h1>

      <div className="flex lg:flex-row md:flex-col flex-col-reverse items-center w-full justify-between mt-10">
        <div className="flex flex-col items-center lg:items-start md:order-none lg:ml-32 lg:mb-0 md:mb-4">
          <div className="lg:text-left text-center lg:pt-10 md:pt-0 pt-10 font-bellefair pb-10">
            <h3 className="lg:text-[32px] md:text-[24px] text-gray-400 uppercase">
              {selectedCrew.role}
            </h3>
            <h4 className="lg:text-[56px] md:text-[40px] text-[24px] font-bellefair text-white mt-2 uppercase">
              {selectedCrew.name}
            </h4>
            <p className="lg:text-[18px] md:text-[16px] text-[15px] font-barlow text-grayy mt-4 lg:max-w-[27rem] md:max-w-[29rem] max-w-[23rem]">
              {selectedCrew.bio}
            </p>
          </div>
          <div className="flex space-x-4 lg:pt-10 md:pt-0 pt-10">
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
            className=" object-contain mask-gradient lg:w-[568.07px] lg:h-[712px] md:w-[456.37px] md:h-[572px] w-[327px] h-[223px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
