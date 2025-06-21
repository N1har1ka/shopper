import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:3000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  const remove_product = async (id) => {
    await fetch("http://localhost:3000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="w-full min-h-screen overflow-y-auto px-2 py-4 sm:px-4 bg-[#f6f6f6]">
      <h1 className="text-center font-semibold text-base sm:text-xl mb-4">
        All Products List
      </h1>

      {/* Table Header */}
      <div className="grid grid-cols-6  text-xs sm:text-sm font-semibold text-[#333] mb-2">
        <p>Image</p>
        <p>Title</p>
        <p>Old</p>
        <p>New</p>
        <p>Cat.</p>
        <p className="pl-7 sm:pl-9 md:pl-12 lg:pl-18">Del</p>
      </div>

      {/* Products */}
      {allProducts.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-6 gap-1 items-center text-xs sm:text-sm bg-white rounded shadow p-2 mb-2"
        >
          <img
            className="h-12 w-12 object-contain"
            src={item.image}
            alt={item.name}
          />
          <p className="truncate font-medium text-[#333]">{item.name}</p>
          <p className="line-through text-[#888]">${item.old_price}</p>
          <p className="text-[#333] font-semibold">${item.new_price}</p>
          <p className="text-[#555]">{item.category}</p>
          <img
            onClick={() => remove_product(item.id)}
            className="w-4 h-4 cursor-pointer mx-auto"
            src={cross_icon}
            alt="Remove"
          />
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
