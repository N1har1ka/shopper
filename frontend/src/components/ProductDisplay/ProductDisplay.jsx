import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItem } = useContext(ShopContext);

  return (
    <div className="flex xs:flex-wrap gap-20">
      <div className="flex gap-5 ">
        <div className="flex flex-col  gap-3">
          <img className="w-35" src={product.image} alt="" />
          <img className="w-35" src={product.image} alt="" />
          <img className="w-35" src={product.image} alt="" />
          <img className="w-35" src={product.image} alt="" />
        </div>
        <div className="">
          <img className="w-151" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-[#3d3d3d] text-4xl font-medium">{product.name}</h1>
        <div className="flex items-center gap-1 my-5 text-[#1c1c1c]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex  gap-5 text-xl font-bold mb-5">
          <div className="line-through text-[#818181]">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="mb-5 ">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round nackline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div>
          <h1 className="font-bold text-[#656565]">Select size</h1>
          <div className="flex gap-5 my-5">
            <div className="border px-4 py-2 cursor-pointer rounded border-[#ebebeb] bg-[#fbfbfb]">
              S
            </div>
            <div className="border px-4 py-2 cursor-pointer rounded border-[#ebebeb] bg-[#fbfbfb]">
              M
            </div>
            <div className="border px-4 py-2 cursor-pointer rounded border-[#ebebeb] bg-[#fbfbfb]">
              L
            </div>
            <div className="border px-4 py-2 cursor-pointer rounded border-[#ebebeb] bg-[#fbfbfb]">
              XL
            </div>
            <div className="border px-4 py-2 cursor-pointer rounded border-[#ebebeb] bg-[#fbfbfb]">
              XXL
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="cursor-pointer px-7 py-2 text-white font-bold bg-[#ff4141]"
          >
            ADD TO CART
          </button>
        </div>
        <p>
          <span className="font-bold">Category :</span> Women, T-shirts
        </p>
        <p>
          <span className="font-bold">Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
