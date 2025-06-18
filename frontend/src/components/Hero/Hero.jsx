import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="flex lg:flex-row xl:fle flex-col justify-between  bg-[#ffeff9]">
      <div className="m-40">
        <h2 className="text-2xl font-bold mb-2">NEW ARRIVALS ONLY</h2>

        <div className="mb-5">
          <div className="flex text-8xl font-medium items-center mb-2">
            <p>new</p>
            <img className="w-20" src={hand_icon} alt="" />
          </div>
          <p className="text-8xl font-medium mb-2">collections</p>
          <p className="text-8xl font-medium mb-5">for everyone</p>
        </div>
        <div className="flex bg-red-500 my-10 p-5 gap-5 items-center rounded-4xl w-3xs">
          <div className="text-white text-xl font-bold">Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="">
        <img
          className="lg:w-4/5 md:w-2/3 sm:max-w-fit"
          src={hero_image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
