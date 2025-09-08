import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './moviesList';

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies)
    

  return (
   
    <div className='bg-black -mt-58   text-white'>
      <MoviesList title={"Now Playing"} movies= {movies?.nowPlayingMovies}/>
      <MoviesList title={"Popular"} movies= {movies?.TrendingMovies}/>
      <MoviesList title={"Top Rated"} movies= {movies?.nowPlayingMovies}/>
      <MoviesList title={"Horror"} movies= {movies?.nowPlayingMovies}/>
    
    </div>
  )
}

export default SecondaryContainer;