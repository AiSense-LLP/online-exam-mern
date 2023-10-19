import React from "react";

const GoodCom = () => {
  return (
    <div className="w-full py-28 lg:px-16 my-16 flex lg:flex-row flex-col gap-20 mb-10 px-8">
      <div className="w-full">
        <div className="text-5xl font-light">You're in good company</div>

        <div className="my-5 text-3xl lg:pr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          cupiditate voluptatem minima perferendis modi velit consectetur
          voluptas
        </div>

        <div className='lg:grid grid-cols-3 gap-10  hidden'>
          <div className="bg-gray-200 w-40 px-10 h-16 border-2 border-gray-400 "></div>
          <div className="bg-gray-200 w-40 px-10 h-16 border-2 border-gray-400 "></div>
          <div className="bg-gray-200 w-40 px-10 h-16 border-2 border-gray-400 "></div>
          <div className="bg-gray-200 w-40 px-10 h-16 border-2 border-gray-400 "></div>
          <div className="bg-gray-200 w-40 px-10 h-16 border-2 border-gray-400 "></div>
          <div className="bg-gray-200 w-40 px-10 h-16 border-2 border-gray-400 "></div>
        </div>
      </div>


      <div className='w-full border-2 border-black/30 flex  flex-col'>
        <div className='bg-gray-200 w-full  h-fit border-b-2 py-32 border-black/30 '></div>
        <div className='p-10 bg-white w-full'>  <h1 className='font-bold text-xl mb-5'>Lorem ipsum dolor sit amet  </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius excepturi minus nobis labore ex hic delectus, aut repellendus et voluptatem dolorum? Officiis facilis eius molestias ex? Error similique quas harum.</p>
        </div>


      </div>
    </div>
  );
};

export default GoodCom;
