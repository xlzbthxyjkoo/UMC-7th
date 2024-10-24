import * as S from "../styles/GridStyle";
import useCustomFetch from "../hooks/useCustomFetch";
import { useLocation } from "react-router-dom";

const Grid = () => {
  const location = useLocation();

  // 현재 경로에 따라 적절한 API 엔드포인트를 결정
  const getApiEndpoint = () => {
    const path = location.pathname.split("/").pop();
    const endpoints = {
      "now-playing": "/movie/now_playing",
      popular: "/movie/popular",
      "top-rated": "/movie/top_rated",
      "up-coming": "/movie/upcoming",
    };
    return endpoints[path] || "/movie/now_playing";
  };

  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`${getApiEndpoint()}?language=ko-KR&page=1`);

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>로딩 중 입니다...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>Error</h1>
      </div>
    );
  }

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
