import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
      }}
      className=" flex  m-30 pt-10 px-30  justify-between"
    >
      <div className="flex flex-col gap-7 mt-20">
        <h1 className="text-8xl font-medium">Exclusive</h1>
        <h1 className="text-8xl font-medium">Offers For You</h1>
        <p className="text-2xl font-bold">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className=" bg-red-500 cursor-pointer p-5 text-xl text-white rounded-4xl w-3xs">
          Check Now
        </button>
      </div>
      <div>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
