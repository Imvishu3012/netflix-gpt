import React from 'react';
import MovieCard from './movieCard';

const MoviesList = ({ title, movies }) => {
  return (
    <div className='p-2'>
      <h1 className='text-2xl text-white p-2'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide gap-4 p-2'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;