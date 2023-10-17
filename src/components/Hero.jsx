import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-[#FAFAFC] h-[37rem] mt-16 flex gap-10  items-center justify-around p-24">
        <div>
          <div className="w-[479px] h-[216px] text-black text-7xl font-bold gap-8 flex flex-col ">
            Take Online
            <br />
            <span className="">Exam.</span>
          </div>

          <div className=" text-black text-3xl font-medium mt-10">
            NUMBER OF ACTIVE USERS RIGHT NOW
          </div>

          <div className="text-[#4A3AFF] text-5xl font-bold flex justify-center items-center mt-4">
            200+
          </div>
        </div>
        <div>
          <img
            src="images/Bitmap.png"
            className="w-[350px] h-[350px] flex-shrink-0 mb-24"
            alt="Hero image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;