import React from 'react';

const Movie = (props) => {
  const { title, genre, releaseYear, image } = props;

  return (
    <div className="movie">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{genre}</p>
      <p>{releaseYear}</p>
    </div>
  );
};

export default Movie;
