import React from "react";

const DescriptionBox = () => {
  return (
    <div className="flex flex-col mt-[30px] px-4 sm:px-6 md:px-10">
      {/* Tabs */}
      <div className="flex flex-wrap text-sm sm:text-base font-semibold">
        <div className="border px-4 sm:px-6 py-3 sm:py-5 border-[#d0d0d0] cursor-pointer">
          Description
        </div>
        <div className="border px-4 sm:px-6 py-3 sm:py-5 border-[#d0d0d0] text-[#555] bg-[#fbfbfb] cursor-pointer">
          Reviews (122)
        </div>
      </div>

      {/* Content */}
      <div className="border border-[#d0d0d0] px-4 sm:px-6 md:px-10 py-6 sm:py-10 text-sm sm:text-base text-gray-700 leading-relaxed bg-white">
        <p className="mb-4">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
