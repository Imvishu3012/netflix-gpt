import React from "react";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import useTrendingMovies from "../customHooks/useTrendingMovies";

export const Browse = () => {

useNowPlayingMovies();  
useTrendingMovies();  // Custom hook to fetch now playing movies and handle auth state

  return (
    <> <div className=" w-full h-screen overflow-x-hidden relative">
        
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>

    
        <div>Browse</div>
       
    
      </div>
    </>
  );
};
