import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Images Section */}
        <div className="md:w-3/6 flex">
          {/* Thumbnails Column */}
          <div className="flex flex-col w-[160px] md:w-1/6">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="px-2 pt-3  md:p-2">
                <img
                  src={product.image}
                  alt={`Thumb ${idx + 1}`}
                  className=" object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-[800px] md:w-7/8 object-contain px-3 pt-2">
            <img src={product.image} alt={product.name} className="w-3/4" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5">
          <h1 className="text-xl sm:text-2xl  font-semibold text-gray-800">
            {product.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-sm text-gray-700">
            {Array(4)
              .fill()
              .map((_, i) => (
                <img key={i} src={star_icon} alt="star" className="w-4 h-4" />
              ))}
            <img src={star_dull_icon} alt="star dull" className="w-4 h-4" />
            <span className="ml-1">(122)</span>
          </div>

          {/* Pricing */}
          <div className="flex gap-4 text-base sm:text-lg font-bold">
            <span className="line-through text-gray-400">
              ${product.old_price}
            </span>
            <span className="text-red-500">${product.new_price}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm  leading-relaxed">
            A lightweight, knitted pullover shirt with a round neckline and
            short sleeves. Ideal as both an undershirt or outer garment.
          </p>

          {/* Size Selection */}
          <div>
            <h2 className="text-gray-700 font-semibold">Select Size</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="border px-3 py-2 rounded text-xs sm:text-sm cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div>
            <button
              onClick={() => addToCart(product.id)}
              className="mt-3 sm:mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition  sm:w-auto"
            >
              ADD TO CART
            </button>
          </div>

          {/* Additional Details */}
          <div className="text-sm sm:text-base text-gray-700">
            <p>
              <strong>Category:</strong> Women, T-shirts
            </p>
            <p>
              <strong>Tags:</strong> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
