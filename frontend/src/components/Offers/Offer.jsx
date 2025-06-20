import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
      }}
      className="mt-20 m-5 sm:m-10 md:m-15 lg:m-30 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-10"
    >
      {/* Text Content */}
      <div className="flex flex-col gap-5 sm:gap-6  text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Exclusive
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Offers For You
        </h1>
        <p className="text-lg sm:text-xl font-bold text-gray-700">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-3xl text-white text-base sm:text-lg w-fit mx-auto md:mx-0">
          Check Now
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={exclusive_image}
          alt="Exclusive"
          className="w-[220px] sm:w-[280px] md:w-[380px] lg:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
