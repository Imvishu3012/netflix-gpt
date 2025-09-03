import React from 'react'
import { TMDB_IMAGE_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
   <div className="min-w-[160px] rounded-lg overflow-hidden shadow-md hover:scale-110 hover:shadow-xl cursor-pointer transition-transform duration-300 ease-in-out">
  <img
    className="w-full h-full object-cover"
    src={TMDB_IMAGE_URL + posterPath}
    alt="Movie Poster"
  />
</div>

  )
}

export default MovieCard;