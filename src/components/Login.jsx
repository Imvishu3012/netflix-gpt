import { useRef, useState } from "react";
import React from "react";
import { Login_Bg } from "../utils/constants";
import Validate from "../utils/Validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();


  const handleButton = (e) => {
    e.preventDefault();
    const message = Validate(email?.current?.value, password?.current?.value);
    setErrorMessage(message);

    if (message) return; //IF there is any message of error then return to original state and do not proceed further

    if (!IsSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + " -" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/Browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " -" + errorMessage);
        });
    }
  };

  const handleSingIn = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={Login_Bg}
          alt="BackgroundImage"
        />
      </div>
      <form className="absolute w-[400px]  h-[500px] p-10 right-0 left-0 my-36 mx-auto rounded-lg bg-black/85">
        <h1 className="text-white font-bold text-3xl mb-6 text-center">
          {!IsSignInForm ? "Sign Up" : "Sign In"}
        </h1>

        {!IsSignInForm && (
          <input
            className="text-white p-3 my-3 w-full bg-black/40 border border-gray-600 focus:[border-width:3px] focus:border-blue-500 rounded-sm outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="text-white p-3 my-3 w-full bg-black/40 border border-gray-600 focus:[border-width:3px] focus:border-blue-500 rounded-sm outline-none"
          type="text"
          placeholder="Email Address"
        />

        <input
          ref={password}
          className="text-white p-3 my-3 w-full bg-black/40 border border-gray-600 focus:[border-width:3px] focus:border-blue-500 rounded-sm outline-none"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500">{ErrorMessage}</p>
        <button
          type="button"
          onClick={handleButton}
          className="bg-red-500 my-4 p-3 cursor-pointer rounded-lg hover:bg-red-600 w-full text-white font-semibold transition"
        >
          {!IsSignInForm ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-gray-400 text-center mt-5">
          {IsSignInForm ? "New to Netflix?" : "Already A member?"}
          <span
            className="cursor-pointer text-white hover:underline"
            onClick={handleSingIn}
          >
            {IsSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
