import React from "react";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 py-1 shadow-md bg-white">
      {/* Logo */}
      <img src={navlogo} alt="Logo" className="w-32 sm:w-38 md:w-40 lg:w-50" />

      {/* Profile Icon */}
      <img
        src={navProfile}
        alt="Profile"
        className="w-12 h-12 md:w-16 md:h-16 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
