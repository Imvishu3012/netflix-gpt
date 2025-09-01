import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import React from "react";
import useMovieTrailer from "../customHooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
    
    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo)
    useMovieTrailer(movieId);
  return (
    <div className="w-screen top-0">
      <iframe className="w-screen aspect-video"
src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${trailerVideo?.key}`}        
title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

export default VideoBackground;
