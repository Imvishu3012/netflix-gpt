import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrendingMovies = () => {

  const TrendingMovies = useSelector((store)=>store.movies.addTrendingMovies) //For Memoization

  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)
    const jsonData = await data.json();
    dispatch(addTrendingMovies(jsonData?.results)); // Dispatching the now playing movies to the redux store
    
  };

  useEffect(() => {
    
   !TrendingMovies && getTrendingMovies(); //Memoization

  }, []); // Fetching the now playing movies from the API From TMDB

}
export default useTrendingMovies;
