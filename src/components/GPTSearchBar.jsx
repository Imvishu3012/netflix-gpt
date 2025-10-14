import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import {  groqClient } from "../utils/OpenaiDependency";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMoviesResult } from "../utils/gptSlice";


const GPTSearchBar = () => {
  
   const dispatch = useDispatch()
  const langKey = useSelector((store)=>store.config.lang)
  const searchText = useRef(null);

    //Searching Movies in TMDB
    const SearchGptMovies = async(movie)=>{
       const data = await fetch ("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
     const json = await data.json()
     return json.results
      }



  // OpenAi COMES IN WORK BELOW
  const searchButton =async()=>{
    const query =
      "Act as a movie recommendation system for the query " +
      searchText.current.value +
      "Suggest strictly 5 movies only just names based on the name or genre im asking, Comma separated like the example given ahead. Result Example: Sholey, Gadar, Singham, Kantara, Saiyaara.";

    const completion = await groqClient.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Fast & good quality
      messages: [{ role: "user", content: query }],
    });
   const GPTMovies = completion.choices[0].message.content.split(',')
console.log(GPTMovies);

 const PromiseArray = GPTMovies.map((movie)=>SearchGptMovies(movie)) //from above function
  const TMDBResults = await Promise.all(PromiseArray)
  const Final = TMDBResults.map((final)=>final.slice(0, 10))
  console.log(Final)

    dispatch(addGPTMoviesResult({movieNames: GPTMovies, movieResults: Final}))
  }


      //Now Make an API call to Open AI to fetch movie suggestion based on this search text 

      
  return (
    <div className="pt-[5%]  flex justify-center ">
      <form className=" rounded-4xl w-1/2 grid grid-cols-12"  onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          placeholder={lang[langKey].GptSearchPlaceholder}
          className="col-span-9 px-4 py-3 m-4 rounded-3xl 
  bg-black/60 backdrop-blur-sm
  border border-blue-400/40 
  text-white placeholder-gray-400
  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
  transition-all duration-300"
        />
        <button
        onClick={searchButton}
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
