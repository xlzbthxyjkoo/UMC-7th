import * as S from "../styles/GridStyle";
// import useCustomFetch from "../hooks/useCustomFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { useMovieQueries } from "../hooks/useMovieQueries";

const Grid = ({ searchQuery }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryHook = () => {
    if (searchQuery) {
      return useMovieQueries.useSearchMovies(searchQuery);
    }

    const path = location.pathname.split("/").pop();
    const queryHooks = {
      "now-playing": useMovieQueries.useNowPlaying,
      popular: useMovieQueries.usePopular,
      "top-rated": useMovieQueries.useTopRated,
      "up-coming": useMovieQueries.useUpcoming,
    };
    return queryHooks[path]?.() || useMovieQueries.useNowPlaying();
  };

  const { data: movieData, isLoading, isError } = getQueryHook();

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
