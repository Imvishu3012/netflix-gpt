import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(false);
  const handleSingIn = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_small.jpg"
          alt="BackgroundImage"
        />
      </div>
<form className="absolute w-[400px]  h-[500px] p-10 right-0 left-0 my-36 mx-auto rounded-lg bg-black/85">
  <h1 className="text-white font-bold text-3xl mb-6 text-center">
    {IsSignInForm ? "Sign Up" : "Sign In"}
  </h1>

  {IsSignInForm && (
    <input
      className="text-white p-3 my-3 w-full bg-black/40 border border-gray-600 focus:[border-width:3px] focus:border-blue-500 rounded-sm outline-none"
      type="text"
      placeholder="Full Name"
    />
  )}

  <input
    className="text-white p-3 my-3 w-full bg-black/40 border border-gray-600 focus:[border-width:3px] focus:border-blue-500 rounded-sm outline-none"
    type="text"
    placeholder="Email Address"
  />

  <input
    className="text-white p-3 my-3 w-full bg-black/40 border border-gray-600 focus:[border-width:3px] focus:border-blue-500 rounded-sm outline-none"
    type="password"
    placeholder="Password"
  />

  <button
    type="button"
    className="bg-red-500 my-4 p-3 cursor-pointer rounded-lg hover:bg-red-600 w-full text-white font-semibold transition"
    onClick={handleSingIn}
  >
    {IsSignInForm ? "Sign Up" : "Sign In"}
  </button>

  <p className="text-gray-400 text-center mt-5">
    {IsSignInForm ? "Already a member? " : "New to Netflix? "}
    <span
      className="cursor-pointer text-white hover:underline"
      onClick={handleSingIn}
    >
      {IsSignInForm ? "Sign In Now" : "Sign Up Now"}
    </span>
  </p>
</form>

    </div>
  );
};

export default Login;
