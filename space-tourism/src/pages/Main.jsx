//import React from "react";

const Main = () => {
  return (
    <main className="flex flex-col text-center md:text-left md:flex-row gap-4 min-h-screen md:p-8 w-4/5 m-auto">
      <div className="flex flex-col justify-center flex-1">
        <h2 className="font-barlow-condensed text-[16px] tracking-[4.75px] text-grayy md:text-white">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-bellefair text-[80px] md:text-[150px]">SPACE</h1>
        <p className="text-grayy md:text-white md:text-left max-w-440px text-center">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center flex-1 relative">
        <div className="w-[150px] h-[150px] md:w-[274px] md:h-[274px] bg-white rounded-full flex items-center justify-center absolute md:bottom-[220px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 cursor-pointer hover:before:content-[''] hover:before:absolute hover:before:w-[274px] hover:before:h-[274px] hover:before:bg-white hover:before:rounded-full hover:before:animate-ping">
          <p className="text-black text-2xl font-bellefair relative">EXPLORE</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
