import React from "react";

const LoginSignup = () => {
  return (
    <div className="bg-[#f5d0e8] w-full flex flex-col items-center h-[90vh]">
      <div className="bg-white m-15 h-4/5 w-1/3 px-10 pt-10 pb-10">
        <h1 className="text-xl font-bold">Sign Up</h1>
        <div className="flex flex-col gap-5">
          <input
            className="border border-[#c9c9c9] text-[#5c5c5c] p-3 mt-2"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="border border-[#c9c9c9] text-[#5c5c5c] p-3 "
            type="email"
            placeholder="Email Address"
          />
          <input
            className="border border-[#c9c9c9] text-[#5c5c5c] p-3 "
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="w-full  p-3 mt-5 cursor-pointer text-white font-medium bg-[#ff4141]">
          Continue
        </button>
        <p className="text-[#5c5c5c] my-5">
          Already have an account ?
          <span className="text-[#ff4141] font-bold"> Login here</span>
        </p>
        <div className="flex  gap-5 pb-10">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of us.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
