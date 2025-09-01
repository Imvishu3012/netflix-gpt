import React from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const user = useSelector((store)=>store.user)
    const navigate = useNavigate();

  const handleClick = () => {       // Doing all these for the button
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error" + error);
        // An error happened.
      });
  };

    return (
    <header className="flex absolute items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent w-full z-10">
      <img className="w-40" src={LOGO} alt="Header-logo" />
      {user && (<button
        onClick={handleClick}
        className="text-white bg-red-600 px-4 py-2 rounded-lg cursor-pointer transition-all duration-100 ease-out hover:bg-red-500 active:scale-95 outline-none font-bold shadow-red-400 shadow-lg"
      >
        Sign Out
      </button>)}
    </header>
  );
};

export default Header;