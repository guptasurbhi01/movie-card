import React from "react";

const MovieCard = ({ movie }) => {
  const { title, subtitle, description, image, rating } = movie;

  return (
    <div className="movie-card">
      <img className="movie-image" src={image} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <div className="rating">
          <span className="star" role="img" aria-label="rating-star">
            ⭐
          </span>
          <span className="rating-value">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
