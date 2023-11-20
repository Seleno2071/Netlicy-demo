import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
   <div className="m-10" id="offer">
    <div className=" w-full text-center mb-10">
    <h1 className="text-red-600 text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
      Best flavor Deal!
    </h1>
    <p className="text-base md:text-xl w-[50vw] mx-auto">
      Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
      primis libero tempus, blandit a cursus varius magna
    </p>
  </div>
    <div className="bg-orange-400 h-screen rounded-lg mx-auto lg:w-[90%] flex flex-col md:flex-row md:justify-between  md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className=" flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
   </div>
  );
};

export default Offer;
