import React, { useContext, useRef, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);

  // const dropdown_toggle = (e) => {
  //   menuRef.current.classList.toggle('nav-menu-visible');
  //   e.target.classList.toggle('open');
  // }
  // const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full shadow-md bg-white px-4 py-3 lg:px-20">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
          }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Logo" className="w-10 lg:w-14" />
          <p className="font-bold text-xl sm:text-2xl lg:text-3xl">SHOPPER</p>
        </Link>

        {/* Navigation Links */}
        <ul
          // ref={menuRef} className="nav-menu-visible"
          className={`w-full lg:w-auto text-[#535151] font-medium transition-all duration-300 lg:block hidden
  // ${menuOpen ? "flex flex-col gap-4 mt-4" : "hidden"} 
  lg:flex lg:flex-row lg:items-center lg:gap-10`}
        >
          <li className="cursor-pointer" onClick={() => setMenu("shop")}>
            <Link to="/">Shop</Link>
            {menu === "shop" && <hr className="mt-1 border-red-400 border" />}
          </li>
          <li className="cursor-pointer" onClick={() => setMenu("mens")}>
            <Link to="/mens">Men</Link>
            {menu === "mens" && <hr className="mt-1 border-red-400 border" />}
          </li>
          <li className="cursor-pointer" onClick={() => setMenu("womens")}>
            <Link to="/womens">Women</Link>
            {menu === "womens" && <hr className="mt-1 border-red-400 border" />}
          </li>
          <li className="cursor-pointer" onClick={() => setMenu("kids")}>
            <Link to="/kids">Kids</Link>
            {menu === "kids" && <hr className="mt-1 border-red-400 border" />}
          </li>
        </ul>

        {/* Right Side on All Screens */}
        <div className="flex items-center gap-4">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className=" cursor-pointer lg:px-10 lg:py-3 lg:text-xl border border-[#d4cdcd] px-4 py-1 rounded-full text-sm hover:bg-[#f3f3f3]"
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="cursor-pointer lg:px-10 lg:py-3 lg:text-xl border border-[#d4cdcd] px-4 py-1 rounded-full text-sm hover:bg-[#f3f3f3]">
                Login
              </button>
            </Link>
          )}
          {/* Login Button */}

          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart">
              <img src={cart_icon} alt="Cart" className="w-6 lg:w-7" />
            </Link>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
              {getTotalCartItems()}
            </div>
          </div>

          {/* Hamburger Menu Icon (Small screens only) */}
          <img
            src={nav_dropdown}
            alt="Menu"
            className={`w-6 h-6 cursor-pointer lg:hidden transition-transform duration-300 ${
              menuOpen ? "rotate-180" : ""
            }`}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Nav Links (Mobile: dropdown | Large: inline) */}
      <div
        className={`lg:hidden absolute top-16 right-0 w-35 bg-[#e4c0c0] text-white rounded-lg shadow-md text-center transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            setMenu("shop");
            setMenuOpen(false);
          }}
        >
          <p
            className={`py-2 px-4 hover:bg-[#d6a8a8] rounded-t-lg transition-all duration-200 cursor-pointer ${
              menu === "shop" ? "text-lg font-semibold" : ""
            }`}
          >
            Shop
          </p>
        </Link>
        <hr className="border-t border-white opacity-30 mx-2" />
        <Link
          to="/mens"
          onClick={() => {
            setMenu("mens");
            setMenuOpen(false);
          }}
        >
          <p
            className={`py-2 px-4 hover:bg-[#d6a8a8] transition-all duration-200 cursor-pointer ${
              menu === "mens" ? "text-lg font-semibold" : ""
            }`}
          >
            Men
          </p>
        </Link>
        <hr className="border-t border-white opacity-30 mx-2" />
        <Link
          to="/womens"
          onClick={() => {
            setMenu("womens");
            setMenuOpen(false);
          }}
        >
          <p
            className={`py-2 px-4 hover:bg-[#d6a8a8] transition-all duration-200 cursor-pointer ${
              menu === "womens" ? "text-lg font-semibold" : ""
            }`}
          >
            Women
          </p>
        </Link>
        <hr className="border-t border-white opacity-30 mx-2" />
        <Link
          to="/kids"
          onClick={() => {
            setMenu("kids");
            setMenuOpen(false);
          }}
        >
          <p
            className={`py-2 px-4 hover:bg-[#d6a8a8] rounded-b-lg transition-all duration-200 cursor-pointer ${
              menu === "kids" ? "text-lg font-semibold" : ""
            }`}
          >
            Kids
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
