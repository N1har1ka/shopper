import React from "react";

const LoginSignup = () => {
  return (
    <div className="bg-[#f5d0e8] min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md px-6 sm:px-10 py-10 rounded-md shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <div className="flex flex-col gap-4">
          <input
            className="border border-[#c9c9c9] text-[#5c5c5c] px-4 py-3"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="border border-[#c9c9c9] text-[#5c5c5c] px-4 py-3"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="border border-[#c9c9c9] text-[#5c5c5c] px-4 py-3"
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="w-full py-3 mt-5 bg-[#ff4141] text-white font-semibold rounded hover:bg-[#e63b3b] transition">
          Continue
        </button>

        <p className="text-[#5c5c5c] text-center my-5 text-sm sm:text-base">
          Already have an account?
          <span className="text-[#ff4141] font-bold cursor-pointer ml-1">
            Login here
          </span>
        </p>

        <div className="flex items-start gap-3 text-sm sm:text-base">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the{" "}
            <span className="underline">terms of use</span>.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
