import React from "react";

const DescriptionBox = () => {
  return (
    <div className="flex flex-col mt-30">
      <div className="flex font-bold">
        <div className="border px-6 py-5 border-[#d0d0d0]">Description</div>
        <div className="border px-6 py-5 border-[#d0d0d0] text-[#555] bg-[#fbfbfb]">
          Reviews (122)
        </div>
      </div>
      <div className="border border-[#d0d0d0] px-6 py-10">
        <p className="mb-5">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals con
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (eg, sizes, colors). Each product usually has its own dedicated page
          with relevant information.E-commerce websites typically display
          products or services along with detailed descriptions, images, prices,
          and any available variations (eg, sizes, colors). Each product usually
          has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
