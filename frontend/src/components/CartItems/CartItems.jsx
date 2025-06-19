import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="m-40">
      <div className="grid [grid-template-columns:0.5fr_2fr_1fr_1fr_1fr_1fr] gap-10 font-semibold ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="text-[#e2e2e2] h-3" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="mb-3">
              <div className="grid [grid-template-columns:0.5fr_2fr_1fr_1fr_1fr_1fr] gap-10 font-semibold mb-5 items-center">
                <img src={e.image} alt="" />
                <p>${e.name}</p>
                <p>${e.new_price}</p>
                <div className="pl-2">
                  <button className="text-center border w-12 h-10">
                    {cartItems[e.id]}
                  </button>
                </div>
                <p className="pl-2">{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cursor-pointer pl-5"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr className="text-[#e2e2e2] h-3" />
            </div>
          );
        }
        return null;
      })}
      <div className="flex justify-between  mt-10">
        <div className="flex flex-col gap-5 w-xl">
          <h1 className="text-2xl font-bold">Cart Totals</h1>
          <div className="flex flex-col text-[#555] font-medium">
            <div className="flex  justify-between py-3">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between  py-3">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between  py-3 font-bold text-black">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-55 font-bold py-4 px-3 text-[#fff] bg-[#ff5a5a]">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className=" h-20 w-110 pr-20">
          <p className="text-[#555] font-medium mb-5">
            If you have a promo code, Enter it here
          </p>
          <div className="bg-[#eaeaea] ">
            <input
              className="bg-transparent px-5"
              type="text"
              placeholder="promo code"
            />
            <button className="py-3 px-8 bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
