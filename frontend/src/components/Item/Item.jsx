import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-full transition-transform ease-linear duration-300 hover:scale-105">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          className="w-full h-auto object-contain"
          src={props.image}
          alt={props.name}
        />
      </Link>
      <p className="my-3 sm:my-4 text-sm sm:text-base font-medium text-[#333] break-words">
        {props.name}
      </p>
      <div className="flex gap-4 sm:gap-8 items-center">
        <div className="text-[#374151] text-sm sm:text-lg font-bold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] line-through text-sm sm:text-lg font-bold">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
