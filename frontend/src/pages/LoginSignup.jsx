import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    let responseData;
    await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    let responseData;
    await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  return (
    <div className="bg-[#f5d0e8] min-h-screen w-full flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md px-6 sm:px-10 py-10 rounded-md shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          {state}
        </h1>

        <div className="flex flex-col gap-4">
          {state === "Signup" ? (
            <input
              value={formData.username}
              onChange={changeHandler}
              name="username"
              className={` ${
                state === "Signup" ? "block" : "hidden"
              } border border-[#c9c9c9] text-[#5c5c5c] px-4 py-3 `}
              type="text"
              placeholder="Enter your name"
            />
          ) : (
            ""
          )}
          <input
            value={formData.email}
            onChange={changeHandler}
            name="email"
            className="border border-[#c9c9c9] text-[#5c5c5c] px-4 py-3"
            type="email"
            placeholder="Email Address"
          />
          <input
            value={formData.password}
            onChange={changeHandler}
            name="password"
            className="border border-[#c9c9c9] text-[#5c5c5c] px-4 py-3"
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="w-full py-3 mt-5 bg-[#ff4141] text-white font-semibold rounded hover:bg-[#e63b3b] transition"
        >
          Continue
        </button>
        {state === "Signup" ? (
          <p className="text-[#5c5c5c] my-5 text-sm sm:text-base">
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-[#ff4141] font-bold cursor-pointer ml-1"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-[#5c5c5c]  my-5 text-sm sm:text-base">
            Create an account?
            <span
              onClick={() => setState("Signup")}
              className="text-[#ff4141] font-bold cursor-pointer ml-1"
            >
              Click here
            </span>
          </p>
        )}

        <div className="flex items-start gap-3 text-sm sm:text-base">
          <input className="mt-1" type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
