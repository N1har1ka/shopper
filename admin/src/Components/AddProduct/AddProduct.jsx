import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    let responseDate;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);
    await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseDate = data;
      });

    if (responseDate.success) {
      product.image = responseDate.image_url;
      await fetch("http://localhost:3000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product added") : alert("Failed");
        });
    }

    setProductDetails({
      name: "",
      image: "",
      category: "women",
      new_price: "",
      old_price: "",
    });
    setImage("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:mt-10 sm:p-6 md:p-10 bg-white rounded-md shadow-md">
      <div className="flex flex-col gap-4 mb-6">
        <label className="font-medium text-[#7b7b7b]">Product title</label>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          className="border border-[#c3c3c3] p-2 rounded-md w-full"
          type="text"
          name="name"
          placeholder="Enter name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[#7b7b7b]">Price</label>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            className="border border-[#c3c3c3] p-2 rounded-md"
            type="text"
            name="old_price"
            placeholder="Enter old price"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-[#7b7b7b]">Offer Price</label>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            className="border border-[#c3c3c3] p-2 rounded-md"
            type="text"
            name="new_price"
            placeholder="Enter new price"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label className="font-medium text-[#7b7b7b]">Product Category</label>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          className="border border-[#c3c3c3] p-2 rounded-md w-full sm:w-1/2 md:w-1/3"
          name="category"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="file-input">
          <img
            className="w-24 cursor-pointer"
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="upload"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        onClick={Add_Product}
        className="bg-[#6079ff] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4a64e0] transition w-full sm:w-[160px]"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
