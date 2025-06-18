import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col m-30 gap-10 items-center">
      <div className="flex items-center">
        <img src={footer_logo} alt="" className="h-16" />
        <p className="text-4xl font-bold text-[#383838]">SHOPPER</p>
      </div>
      <ul className="flex gap-10 font-medium cursor-pointer text-[#252525]">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-10">
        <div className="bg-[#fbfbfb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div>
          <img src={pinterest_icon} alt="" />
        </div>
        <div>
          <img src={instagram_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-30 text-[#1a1a1a]">
        <hr className="w-[80%] bg-[#c7c7c7] h-[3]" />
        <p className="mt-5 font-medium text-center">
          Copyright &copy; 2025 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
