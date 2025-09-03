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
className='flex items-center gap-2 bg-red-500 cursor-pointer text-white hover:bg-red-600 transition-all duration-200 font-semibold px-4 py-2 rounded-md text-md  shadow-lg hover:scale-105'>      
        Sign Out
      </button>)}
    </header>
  );
};

export default Header;

    
