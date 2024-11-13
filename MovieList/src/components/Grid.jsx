import * as S from "../styles/GridStyle";
import useCustomFetch from "../hooks/useCustomFetch";
import { useLocation, useNavigate } from "react-router-dom";

const Grid = ({ searchQuery }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // searchQuery prop이 있으면 검색 API를, 없으면 기존 카테고리 API를 사용
  const getApiEndpoint = () => {
    if (searchQuery) {
      return `/search/movie?query=${encodeURIComponent(
        searchQuery
      )}&language=ko-KR&page=1`;
    }

    const path = location.pathname.split("/").pop();
    const endpoints = {
      "now-playing": "/movie/now_playing",
      popular: "/movie/popular",
      "top-rated": "/movie/top_rated",
      "up-coming": "/movie/upcoming",
    };
    return `${endpoints[path] || "/movie/now_playing"}?language=ko-KR&page=1`;
  };

  const {
    data: movieData,
    isLoading,
    isError,
  } = useCustomFetch(getApiEndpoint());

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  // 스켈레톤 UI 렌더링
  const renderSkeletons = () => {
    return (
      <S.Container>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <S.Item key={index}>
              <S.PosterContainer>
                <S.SkeletonPoster />
              </S.PosterContainer>
              <S.MovieInfo>
                <S.SkeletonText />
                <S.SkeletonText width="60%" />
              </S.MovieInfo>
            </S.Item>
          ))}
      </S.Container>
    );
  };

  if (isLoading) {
    return renderSkeletons();
  }

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>로딩 중입니다...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러가 발생했습니다.</h1>
      </div>
    );
  }

  if (!movieData?.results) {
    return (
      <div>
        <h1 style={{ color: "white" }}>표시할 영화가 없습니다.</h1>
      </div>
    );
  }

  // 검색 결과가 없는 경우
  if (searchQuery && movieData.results.length === 0) {
    return (
      <div>
        <h1 style={{ color: "white" }}>
          검색하신 "{searchQuery}" 영화를 찾을 수 없습니다
        </h1>
      </div>
    );
  }

  return (
    <S.Container>
      {movieData.results.map((movie) => (
        <S.Item
          key={movie.id}
          onClick={() => handleMovieClick(movie.id)}
          style={{ cursor: "pointer" }}
        >
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
