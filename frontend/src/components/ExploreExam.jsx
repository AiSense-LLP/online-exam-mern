import React from "react";

const ExploreExam = () => {
  return (
    <>
      <div className="px-28 py-24  bg-white">
        <div className="flex justify-between items-center">
          <div className="text-6xl font-bold ml-2">Explore Our Exam</div>
          <div>
            <button className="px-6 py-2 border-2 border-black font-semibold">
              EXPLORE ALL
            </button>
          </div>
        </div>

        <div className="my-16 w-full h-screen relative ">
          {/* maths */}
          <div className=" bg-orange-200/60 w-[450px] h-80 py-14 px-7 ">
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
          <div className=" bg-orange-200/60 w-[350px] h-80 py-14 px-7 absolute left-[480px] top-24">
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

          <div className=" w-[300px] py-14 px-7 absolute left-36 top-[340px] shadow-xl ">
            <div className="w-20 h-20  rounded-full  bg-orange-200/60"></div>
            <h1 className="font-bold text-2xl my-5">Science</h1>
            <p className="text-black/40">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              expedita inventore reiciendis, id labore{" "}
            </p>
          </div>

          {/* Phy */}

          <div className=" bg-orange-200/60 w-[260px] py-12 px-7  absolute left-[480px] top-[430px]">
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

          <div className=" shadow-xl w-[350px] h-80 py-14 px-7  absolute left-[760px] top-[430px]">
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

        </div>
      </div>
    </>
  );
};

export default ExploreExam;
