import React from "react";

const NewsLetter = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
      }}
      className="m-5 sm:m-8 md:m-20 lg:m-30 flex flex-col gap-6 sm:gap-8 items-center px-6 sm:px-10 md:px-20 py-12 sm:py-20"
    >
      <h1 className="text-[#454545] text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-snug">
        Get Exclusive Offers On Your Email
      </h1>

      <p className="text-[#454545] text-base sm:text-lg md:text-xl font-medium text-center mt-2">
        Subscribe to our newsletter and stay updated
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mt-4">
        <input
          className="flex-grow px-5 py-3 sm:py-4 border border-[#e3e3e3] rounded-full text-[#616161] text-sm sm:text-base w-full sm:w-auto"
          type="email"
          placeholder="Your Email Id"
        />
        <button className="bg-black text-white px-6 py-3 sm:py-4 rounded-full text-sm sm:text-base w-full sm:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
