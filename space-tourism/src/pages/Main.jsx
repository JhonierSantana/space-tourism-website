const Main = () => {
  return (
    <main className="flex flex-col md:flex-col lg:flex-row text-center md:text-left gap-4 min-h-screen lg:p-8 md:p-0 w-4/5 m-auto md:items-center lg:items-stretch">
      <div className="flex flex-col justify-center flex-1">
        <h2 className="font-barlow-condensed text-[16px] lg:text-[28px] md:text-[20px] lg:text-left md:text-center tracking-[4.75px] text-grayy md:text-white">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-bellefair text-[80px] md:text-[150px]">SPACE</h1>
        <p className=" text-grayy lg:text-[18px] md:text-white lg:text-left md:text-center text-center max-w-440px">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex items-center justify-center flex-1 relative">
        <div className="w-[150px] h-[150px] lg:w-[274px] lg:h-[274px] md:w-[242px] md:h-[242px] bg-white rounded-full flex items-center justify-center absolute lg:bottom-[220px] md:bottom-[150px] lg:left-1/2 md:left-auto left-1/2  transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 cursor-pointer hover:before:content-[''] hover:before:absolute hover:before:w-[274px] hover:before:h-[274px] hover:before:bg-white hover:before:rounded-full hover:before:animate-ping">
          <p className="text-black text-2xl font-bellefair relative">EXPLORE</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
