import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./moviesList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (<div>
    <div className="m-4 p-4 rounded-2xl bg-black/20 overflow-hidden">
      {movieNames.map((movieName,index) => (
        <MoviesList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
    </div>
  );
};

export default GPTMovieSuggestions;
