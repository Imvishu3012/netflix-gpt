import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filteredVideo = jsonData.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    console.log(filteredVideo)
    const Trailer = filteredVideo[7];
    dispatch(addTrailer(Trailer))
  };

  useEffect(() => {
    getMovieVideos();
  }, []);


}
export default useMovieTrailer;