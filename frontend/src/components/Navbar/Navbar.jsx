import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="shadow-md flex w-full justify-between  py-5 px-40">
      <div className=" flex gap-3 items-center ">
        <Link to="/" className="flex gap-3 items-center ">
          <img className="cursor-pointer" src={logo} alt="" />
          <p className="cursor-pointer text-center font-bold text-4xl ">
            SHOPPER
          </p>
        </Link>
      </div>
      <div className="flex  ">
        <ul className="pt-2 text-[#535151] flex items-center gap-15 font-medium ">
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/">Shop</Link>
            {menu == "shop" ? <hr className="mt-2  text-red-400 " /> : ""}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link to="/mens">Men</Link>
            {menu == "mens" ? <hr className="mt-2  text-red-400 " /> : ""}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link to="/womens">Women</Link>
            {menu == "womens" ? <hr className="mt-2  text-red-400 " /> : ""}
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids">Kids</Link>
            {menu == "kids" ? <hr className="mt-2  text-red-400 " /> : ""}
          </li>
        </ul>
      </div>
      <div className="flex gap-10">
        <Link to="/login" className="">
          <button className="btn border border-[#d4cdcd] px-15 py-3 mt-1 rounded-4xl text-xl hover:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <div className="relative">
          <img className="w-14 h-14 pt-2" src={cart_icon} alt="" />
          <div className="absolute top-1 -right-2 flex bg-red-400 text-white h-6 w-6 rounded-full justify-center items-center ">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
