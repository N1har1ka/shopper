import React from "react";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full md:w-[200px] bg-white shadow-sm flex md:flex-col  gap-2 md:justify-start md:pt-4 px-4 py-2 z-10">
      <Link to="/addproduct" className="md:mb-4">
        <div className="flex gap-2 items-center bg-[#f6f6f6] p-2 md:px-4 md:py-3 rounded-md hover:bg-[#ebebeb] transition">
          <img className="w-6 md:w-8" src={add_product_icon} alt="Add" />
          <p className="text-sm font-medium  md:block">Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct">
        <div className="flex gap-2 items-center bg-[#f6f6f6] p-2 md:px-4 md:py-3 rounded-md hover:bg-[#ebebeb] transition">
          <img className="w-6 md:w-8" src={list_product_icon} alt="List" />
          <p className="text-sm font-medium  md:block">Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
