import React from "react";
import { LOGO, SupportedLangs } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import GPTSearchBar from "./GPTSearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";
import { ChangeLanguage } from "../utils/configSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    // Doing all these for the button
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error" + error);
        // An error happened.
      });
  };

  const handleGptClick = () => {
    // Dispatching action to toggle GPT search page
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(ChangeLanguage(e.target.value));
  };

  return (
    <header className="flex absolute items-center justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent w-full z-10">
      <img className="w-40" src={LOGO} alt="Header-logo" />
      {user && (
        <div className="flex gap-4">


          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="text-black bg-white rounded-4xl p-2 pr-2"
            >
              {SupportedLangs.map((lang) => (          // Adding language selection dropdown
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                )
              )}
            </select>
          )}

          <button
            onClick={handleGptClick}
            className="flex items-center gap-2 bg-purple-400 cursor-pointer text-white hover:bg-purple-500 transition-all duration-200 font-semibold px-4 py-2 rounded-4xl text-md  shadow-lg hover:scale-105"
          >
            {showGptSearch ? "Back to Browse" : "GPT Search"}
          </button>

          <button
            onClick={handleClick}
            className="flex items-center gap-2 bg-red-500/90 cursor-pointer text-white hover:bg-red-600 transition-all duration-200 font-semibold px-4 rounded-4xl text-md  shadow-lg hover:scale-105"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
