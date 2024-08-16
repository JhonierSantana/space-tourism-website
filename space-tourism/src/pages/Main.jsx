//import React from "react";

const Main = () => {
  return (
    <main className="flex flex-col md:flex-row gap-4 min-h-screen p-8 w-4/5 m-auto">
      <div className="flex flex-col justify-center flex-1 ">
        <h2 className="font-barlow-condensed text-[28px] tracking-[4.75px]">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-bellefair text-[150px]">SPACE</h1>
        <p className="text-gray-300 text-left max-w-440px">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center flex-1 relative">
        <div className="w-[274px] h-[274px] bg-white rounded-full flex items-center justify-center absolute bottom-[220px] left-[380px] cursor-pointer hover:before:content-[''] hover:before:absolute hover:before:w-[274px] hover:before:h-[274px] hover:before:bg-white hover:before:rounded-full hover:before:animate-ping">
          <p className="text-black text-2xl font-bellefair relative">EXPLORE</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
