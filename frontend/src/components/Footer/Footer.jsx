import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-6 sm:px-10 py-14 bg-white">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <img src={footer_logo} alt="Footer Logo" className="h-12 sm:h-16" />
        <p className="text-2xl sm:text-4xl font-bold text-[#383838]">SHOPPER</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-wrap sm:text-xl justify-center gap-4 sm:gap-10 font-medium cursor-pointer text-[#252525] text-sm">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-6 sm:gap-10 ">
        <div className="bg-[#fbfbfb] p-2 rounded-full">
          <img
            src={instagram_icon}
            alt="Instagram"
            className="h-5 w-5  sm:h-8 sm:w-8"
          />
        </div>
        <div className="bg-[#fbfbfb] p-2 rounded-full">
          <img
            src={pinterest_icon}
            alt="Pinterest"
            className="h-5 w-5 sm:h-8 sm:w-8"
          />
        </div>
        <div className="bg-[#fbfbfb] p-2 rounded-full">
          <img
            src={instagram_icon}
            alt="Instagram"
            className="h-5 w-5 sm:h-8 sm:w-8"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center w-full text-[#1a1a1a]">
        <hr className="w-[80%] bg-[#c7c7c7] h-[2px] border-0" />
        <p className="mt-4 text-sm sm:text-base font-medium text-center">
          &copy; 2025 SHOPPER. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
