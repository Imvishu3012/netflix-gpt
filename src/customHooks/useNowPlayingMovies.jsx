import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const useNowPlayingMovies = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results)); // Dispatching the now playing movies to the redux store
    
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []); // Fetching the now playing movies from the API From TMDB

  const dispatch = useDispatch();
  const navigate =useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/Browse");
        // User is signed in
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
      }
    });

    return () => unsubscribe(); //Unsubscribe when component unmounts
  }, []);
};

export default useNowPlayingMovies;
