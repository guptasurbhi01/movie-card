import React from "react";
import MovieCard from "./MovieCard";
import moviesData from "./movies.json";

const MovieList = () => {
  return (
    <div className="movie-list">
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
