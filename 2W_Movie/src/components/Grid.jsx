import React from "react";
import { MOVIES } from "../mocks/movies";
import "../App.css"; // CSS 파일 import

const Grid = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid-container">
        {MOVIES.results.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
