import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="px-6 sm:px-10 md:px-16 py-10">
      {/* Banner */}
      <img
        src={props.banner}
        alt="Category Banner"
        className="w-full object-cover rounded-md"
      />

      {/* Product Count & Sort */}
      <div className="flex sm:flex-row justify-between items-center mt-8 gap-4">
        <p className="text-sm sm:text-base text-center sm:text-left">
          <span className="font-bold">Showing 1–12</span> out of 36 products
        </p>
        <div className="flex items-center gap-2 border px-4 py-2 rounded-full cursor-pointer text-sm sm:text-base">
          Sort by
          <img src={dropdown_icon} alt="Sort" className="flex  items-center " />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 bg-[#ededed] text-[#787878] font-semibold rounded-full text-sm sm:text-base hover:bg-[#dcdcdc] transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
