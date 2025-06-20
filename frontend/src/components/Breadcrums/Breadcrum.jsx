import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-10 text-[12px] md:text-[16px] font-medium capitalize flex gap-3 items-center  text-[#5e5e5e]">
      HOME
      <img src={arrow_icon} alt="" />
      SHOP
      <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
