import React, { useState } from 'react';
import MovieList from '../src/components/MovieList';
import GenreFilter from '../src/components/GenreFilter';

const App = () => {
  const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Sci-Fi'];
  const moviesData = [
    {
      title: 'Movie 1',
      genre: 'Action',
      releaseYear: 2020,
      image: 'movie1.jpg',
    },
    {
      title: 'Movie 2',
      genre: 'Comedy',
      releaseYear: 2019,
      image: 'movie2.jpg',
    },
    // Add more movies...
  ];

  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="app">
      <h1>Movie Recommendation App</h1>
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={handleGenreSelect}
      />
      <MovieList movies={moviesData} selectedGenre={selectedGenre} />
    </div>
  );
};

export default App;