import React from 'react';

const GenreFilter = (props) => {
  const { genres, selectedGenre, onSelectGenre } = props;

  return (
    <div className="genre-filter">
      <button
        className={selectedGenre === 'All' ? 'active' : ''}
        onClick={() => onSelectGenre('All')}
      >
        All
      </button>
      {genres.map((genre, index) => (
        <button
          key={index}
          className={selectedGenre === genre ? 'active' : ''}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;