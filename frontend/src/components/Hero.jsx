import React from "react";
import Exam from "./Exam";
import ExploreExam from "./ExploreExam";
import GoodCom from "./GoodCom";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[37rem] mt-16 flex lg:gap-10  items-center justify-around lg:p-24 p-14  lg:flex-row gap-16 flex-col">
        <div className="pt-96 mt-14 lg:pt-0 ml-20 lg:ml-0">
          <div className="w-[479px] h-[216px] text-black text-7xl font-bold gap-8 flex flex-col">
            Take Online
            <br />
            <span className="">Exam.</span>
          </div>

          <div className=" text-black lg:text-2xl font-medium lg:mt-10 text-xl">
            NUMBER OF ACTIVE USERS RIGHT NOW
          </div>

          <div className="text-[#4A3AFF] text-5xl font-bold flex justify-center items-center mt-4">
            200+
          </div>
        </div>
        <div className="w-full justify-center items-center flex">
          <img
            src="images/Bitmap.png"
            className="lg:w-[350px] lg:h-[350px] flex-shrink-0 mb-24 "
            alt="Hero"
          />
        </div>
      </div>

      <Exam />
      <ExploreExam />
      <GoodCom />
      <Footer />
      <div className="w-full h-[500px]"></div>
    </>
  );
};

export default Hero;
