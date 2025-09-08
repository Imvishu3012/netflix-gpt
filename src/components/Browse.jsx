import React from "react";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GptMain from "./GptMain";

export const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  useNowPlayingMovies();
  useTrendingMovies(); // Custom hook to fetch now playing movies and handle auth state

  return (
    <>
      
      <div className=" w-full h-screen overflow-x-hidden relative">
        <Header />
        {showGptSearch ? (
          <GptMain />
        ) : (
          <>
          
            <MainContainer />
            <SecondaryContainer />
          </>
        )}

      </div>
    </>
  );
};
