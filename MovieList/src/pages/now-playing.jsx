import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../styles/CategoryStyle";

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/movie/movie/now_playing?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsIm5iZiI6MTcyNjE0MTU3Ny42MDM2ODcsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFPsPRHPidq2OnJ3U-3wHJYhnGajDFqUsM8XJ_a_0bw`,
          },
        }
      );
      setMovies(movies.data.results);
    };
    getMovies();
  }, []);

  return (
    <S.MovieGrid>
      {movies.map((movie) => (
        <S.MovieCard key={movie.id}>
          <S.MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <S.MovieOverlay>
            <S.MovieTitle>{movie.title}</S.MovieTitle>
          </S.MovieOverlay>
        </S.MovieCard>
      ))}
    </S.MovieGrid>
  );
};

export default NowPlayingPage;
