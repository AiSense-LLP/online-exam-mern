import React from "react";


const Exam = () => {
  return (
    <>
    
      <div
        className="bg-[#4A3AFF] w-full flex  overflow-hidden lg:h-[530px]
  mt-96 lg:mt-0
      "
      >
       <div className="w-full flex flex-col lg:flex-row">
          <img
            src="images/Group 780.png"
            alt="primary"
            className="lg:w-[370px] lg:h-[390px] lg:absolute left-0 lg:left-[8px] lg:top-[895px]  w-full "
          />
          <img
            src="images/Group 781.png"
            alt="Bank"
            className="lg:w-[310px] lg:h-[320px] lg:absolute xl:left-[400px] lg:left-[370px] lg:top-[820px] -mt-10 lg:-mt-0 md:px-20 lg:px-0 sm:px-14 px-12"
          />
          <img
            src="images/Group 782.png"
            alt="NSI"
            className="lg:w-[370px] lg:h-[416px] lg:absolute xl:left-[740px] lg:top-[720px]  lg:left-[670px] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Exam;
