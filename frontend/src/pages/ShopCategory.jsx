import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="m-30">
      <img src={props.banner} alt="" />
      <div className="flex justify-between items-center mt-10">
        <p>
          <span className="font-black">Showing 1-12</span> out of 36 products
        </p>
        <div className="flex items-center gap-2 border py-2 px-4 rounded-4xl">
          Sort by
          <span>
            <img src={dropdown_icon} alt="" />
          </span>
        </div>
      </div>
      <div className="flex  flex-wrap gap-10 mt-5">
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
      <div className="flex flex-col justify-center items-center">
        <div className="m-10 py-3 font-bold w-1/7 bg-[#ededed] flex justify-center items-center rounded-4xl text-[#787878]">
          Explore More
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
