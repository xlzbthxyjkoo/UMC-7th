import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams를 import
import axios from "axios";
import * as S from "../styles/GridStyle";

const Grid = () => {
  const { category } = useParams(); // 카테고리 파라미터 가져오기
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      let url = "";

      switch (category) {
        case "now-playing":
          url = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1`;
          break;
        case "popular":
          url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;
          break;
        case "top-rated":
          url = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1`;
          break;
        case "up-coming":
          url = `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`;
          break;
        default:
          url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`;
      }
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`, // 여기에 API 키 입력
        },
      });

      setMovies(response.data.results); // 데이터 설정
    };

    getMovies();
  }, [category]); // category 변경될 때마다 데이터 재요청

  return (
    <S.Container>
      {movies.map((movie) => (
        <S.Item key={movie.id}>
          <S.PosterContainer>
            <S.Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <S.Overlay />
          </S.PosterContainer>
          <S.MovieInfo>
            <S.MovieTitle>{movie.title}</S.MovieTitle>
            <S.MovieReleaseDate>
              {new Date(movie.release_date).toLocaleDateString()}
            </S.MovieReleaseDate>
          </S.MovieInfo>
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Grid;
