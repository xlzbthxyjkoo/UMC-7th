import React from "react";
import * as S from "../styles/GridStyle";
import { MOVIES } from "../mocks/movies";

const Grid = () => {
  return (
    <S.Container>
      {MOVIES.results.map((movie) => (
        <S.Item key={movie.id}>
          <S.Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <S.Overlay />
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Grid;
