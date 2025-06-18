import React from "react";

const Item = (props) => {
  return (
    <div className="w-[305px] mb-10 transition-transform ease-linear duration-300 hover:scale-105">
      <img src={props.image} alt="" />
      <p className="my-6">{props.name}</p>
      <div className="flex gap-20">
        <div className="text-[#374151] text-xl font-bold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] line-through text-xl font-bold">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
