import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";


const GPTSearchBar = () => {

  const langKey = useSelector((store)=>store.config.lang)

  return (
    <div className="pt-[5%]  flex justify-center ">
      <form className=" rounded-4xl w-1/2 grid grid-cols-12" action="">
        <input
          type="text"
          placeholder={lang[langKey].GptSearchPlaceholder}
          className="col-span-9 px-4 py-3 m-4 rounded-3xl 
  bg-black/60 backdrop-blur-sm
  border border-blue-400/40 
  text-white placeholder-gray-400
  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
  transition-all duration-300"
        />
        <button
        type="button"
          className=" bg-gradient-to-r from-blue-500 to-indigo-600
   col-span-3 m-5 shadow-md hover:shadow-md -ml-1.5  rounded-4xl active:scale-95 transition-transform duration-150  ease-out cursor-pointer text-white"
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
