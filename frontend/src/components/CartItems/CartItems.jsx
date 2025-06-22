import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <main className="px-4 sm:px-10 md:px-20 py-10">
      {/* Header Row */}
      <section className="hidden md:grid grid-cols-6 gap-6 font-semibold mb-4 text-[#333]">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </section>
      <hr className="border-[#e2e2e2]" />

      {/* Cart Items */}
      <section aria-label="Cart Items">
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <article
                key={e.id}
                className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center py-5 border-b border-[#e2e2e2]"
              >
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-16 sm:w-20 object-contain cursor-pointer"
                />
                <p className="text-sm sm:text-base font-medium">{e.name}</p>
                <p className="hidden md:block">${e.new_price}</p>
                <div>
                  <button
                    aria-label="Quantity"
                    className="border w-12 h-10 text-center rounded"
                  >
                    {cartItems[e.id]}
                  </button>
                </div>
                <p className="hidden md:block font-medium">
                  ${e.new_price * cartItems[e.id]}
                </p>
                <button
                  onClick={() => removeFromCart(e.id)}
                  aria-label="Remove item"
                  className="w-5 sm:w-6 "
                >
                  <img
                    src={remove_icon}
                    alt="Remove from cart"
                    className="w-full cursor-pointer"
                  />
                </button>
              </article>
            );
          }
          return null;
        })}
      </section>

      {/* Cart Summary & Promo Code */}
      <section
        aria-label="Cart Summary"
        className="flex flex-col md:flex-row justify-between gap-10 lg:gap-30 mt-12"
      >
        {/* Totals */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#222]">Cart Totals</h2>
          <div className="flex flex-col text-[#555] font-medium">
            <div className="flex justify-between py-3">
              <span>Subtotal</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <span>Shipping Fee</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between py-3 font-bold text-black">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button
            className="w-full md:w-auto font-bold py-3 px-6 text-white bg-[#ff5a5a] rounded hover:bg-[#e74c4c] transition"
            aria-label="Proceed to Checkout"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold text-[#333] mb-4">
            Have a Promo Code?
          </h3>
          <div className="flex  sm:flex-row items-stretch bg-[#eaeaea] rounded overflow-hidden">
            <input
              className="flex-1 px-4 py-3 text-sm outline-none bg-transparent"
              type="text"
              placeholder="Enter promo code"
              aria-label="Promo code"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#222] transition  sm:w-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartItems;
