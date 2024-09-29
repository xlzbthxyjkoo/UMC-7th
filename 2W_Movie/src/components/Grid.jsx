import React from "react";
import { MOVIES } from "../mocks/movies";
import "../App.css";

const Grid = () => {
  return (
    <div>
      <div className="container">
        {MOVIES.results.map((movie) => (
          <div key={movie.id} className="item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="poster"
            />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
