import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const MovieTrailer = useSelector((store)=>store.movies.addTrailer) //For Memoization

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filteredVideo = jsonData?.results?.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const Trailer = filteredVideo[0];
    dispatch(addTrailer(Trailer))
  };

  useEffect(() => {
    !MovieTrailer && getMovieVideos(); //Memoization
  }, []);


}
export default useMovieTrailer;