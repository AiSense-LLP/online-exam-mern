import React from "react";

const ExploreExam = () => {
  return (
    <>
      <div className=" xl:px-28 pt-20 h-full bg-white px-9 lg:px-10 pb-10 lg:pb-40 xl:pb-24">
        <div className="flex justify-between items-center">
          <div className="lg:text-6xl font-bold ml-2 text-4xl">
            Explore Our Exam
          </div>
          <div className="hidden lg:block">
            <button className="px-6 py-2 border-2 border-black font-semibold hover:bg-black hover:text-white rounded">
              EXPLORE ALL
            </button>
          </div>
        </div>

        <div className="mt-14 w-full h-full flex flex-col  lg:relative gap-5 lg:h-screen">
          {/* maths */}
          <div className=" bg-orange-200/60 lg:w-[400px] xl:w-[450px] h-80 py-14 px-7 ">
            <img
              src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg?w=2000"
              alt=""
              className="rounded-full w-12 h-12"
            />
            <h1 className="font-bold text-2xl my-5">Math</h1>
            <p className="text-black/40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              expedita inventore reiciendis, id labore{" "}
            </p>
          </div>

          {/* eng */}
          <div className=" bg-orange-200/60 w-full h-80 py-14 px-7 lg:lg:absolute lg:left-[420px] xl:left-[460px] top-24 lg:w-[400px]">
            <img
              src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg?w=2000"
              alt=""
              className="rounded-full w-12 h-12"
            />
            <h1 className="font-bold text-2xl my-5">English</h1>
            <p className="text-black/40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              expedita inventore reiciendis, id labore{" "}
            </p>
          </div>

          {/* science */}

          <div className=" w-full py-14 px-7 lg:absolute lg:left-24 xl:left-36 top-[340px] shadow-xl lg:w-[300px] ">
            <div className="w-20 h-20  rounded-full  bg-orange-200/60"></div>
            <h1 className="font-bold text-2xl my-5">Science</h1>
            <p className="text-black/40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              expedita inventore reiciendis, id labore{" "}
            </p>
          </div>

          {/* Phy */}

          <div className=" bg-orange-200/60 lg:w-[250px] xl:w-[260px] py-12 xl:px-7 lg:px-4  lg:absolute xl:left-[460px] lg:left-[420px] top-[430px]">
            <img
              src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg?w=2000"
              alt=""
              className="rounded-full w-12 h-12"
            />
            <h1 className="font-bold text-2xl my-5">Physics</h1>
            <p className="text-black/40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              expedita inventore reiciendis, id labore{" "}
            </p>
          </div>

          {/* gk */}

          <div className=" shadow-xl xl:w-[350px] h-80 py-14 px-3  lg:absolute lg:left-[690px] xl:left-[740px] top-[430px]">
            <img
              src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg?w=2000"
              alt=""
              className="rounded-full w-12 h-12"
            />
            <h1 className="font-bold text-2xl my-5">GK</h1>
            <p className="text-black/40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              expedita inventore reiciendis, id labore{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:hidden my-10">
            <button className="px-6 py-2 border-2 border-black font-semibold hover:bg-black hover:text-white rounded">
              EXPLORE ALL
            </button>
          </div>
      </div>
    </>
  );
};

export default ExploreExam;
