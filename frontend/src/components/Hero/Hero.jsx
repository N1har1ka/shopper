import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex  md:flex-row md:gap-20 items-center justify-between px-6 md:px-16 py-10 bg-[#ffeff9]">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start sm:gap-4 ">
        <h2 className=" md:text-xl font-semibold text-gray-700">
          NEW ARRIVALS ONLY
        </h2>

        <div>
          <div className="flex items-center text-2xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <p>new</p>
            <img className="w-10 sm:w-14 lg:w-20" src={hand_icon} alt="" />
          </div>
          <p className="text-2xl sm:text-5xl lg:text-6xl font-semibold">
            collections
          </p>
          <p className="text-2xl sm:text-5xl lg:text-6xl font-semibold">
            for everyone
          </p>
        </div>

        <div className="flex items-center bg-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 mt-6 rounded-3xl gap-1 sm:gap-3 hover:bg-red-600 transition">
          <span className="text-[16px] sm:text-lg md:text-xl font-bold">
            Latest Collection
          </span>
          <img className="w-4 sm:w-6 md:w-8" src={arrow_icon} alt="" />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full  md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          className="max-w-[150px]  sm:max-w-[250px] md:max-w-[300px]   lg:w-full"
          src={hero_image}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
