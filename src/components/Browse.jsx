import React from "react";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";

export const Browse = () => {

useNowPlayingMovies();    // Custom hook to fetch now playing movies and handle auth state

  return (
    <> <div className=" w-full h-screen relative">
        
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>

    
        <div>Browse</div>
       
    
      </div>
    </>
  );
};
