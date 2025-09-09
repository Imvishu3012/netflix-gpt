import React from 'react';
import MovieCard from './movieCard';

const MoviesList = ({ title, movies }) => {
  return (
    <div className='p-2'>
      <h1 className='text-2xl text-white p-2'>{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide gap-4 p-2">
  {movies?.map((movie) => (
    <div key={movie.id} className="flex-shrink-0">
      <MovieCard posterPath={movie?.poster_path} />
    </div>
  ))}
</div>

    </div>
  );
};

export default MoviesList;