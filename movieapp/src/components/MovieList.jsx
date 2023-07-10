import React from 'react';
import Movie from '../components/Movie';

const MovieList = (props) => {
  const { movies, selectedGenre } = props;

  const filteredMovies = selectedGenre === 'All'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="movie-list">
      {filteredMovies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          genre={movie.genre}
          releaseYear={movie.releaseYear}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default MovieList;
