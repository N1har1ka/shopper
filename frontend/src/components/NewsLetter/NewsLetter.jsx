import React from "react";

const NewsLetter = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
      }}
      className=" flex flex-col gap-10 items-center  m-30 p-30"
    >
      <h1 className="text-[#454545]  text-6xl font-bold ">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-2xl font-medium mt-5">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex border border-[#e3e3e3] rounded-4xl gap-5">
        <input
          className="p-5 w-2xl text-[#616161]"
          type="email"
          placeholder="Your Email Id"
          name=""
          id=""
        />
        <button className=" bg-black text-white py-5 px-10 border rounded-4xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
