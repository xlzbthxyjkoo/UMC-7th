import * as S from "../styles/GridStyle";
import useCustomFetch from "../hooks/useCustomFetch";
import { useLocation, useNavigate } from "react-router-dom";

const Grid = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //카테고리에 따라 다른 주소를 넣어주기 위해 endpoints 설정
  const getApiEndpoint = () => {
    const path = location.pathname.split("/").pop(); //url의 마지막 부분을 가져옴 /movie/popular이면 popular을 가져옴
    const endpoints = {
      "now-playing": "/movie/now_playing", // 하이픈 있어서 따옴표 필요
      popular: "/movie/popular", //하이픈 없기 때문에 따옴표 x
      "top-rated": "/movie/top_rated",
      "up-coming": "/movie/upcoming",
    };
    return endpoints[path] || "/movie/now_playing"; //일치하는 것이 없으면 now_playing이 default
  };

  //영화 목록 데이터
  const {
    data: movieData,
    isLoading,
    isError,
  } = useCustomFetch(`${getApiEndpoint()}?language=ko-KR&page=1`);

  //영화 클릭 시 해당 영화 id를 이용해 상세 페이지로 이동
  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  //로딩
  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: "white" }}>로딩 중입니다...</h1>
      </div>
    );
  }

  //에러
  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러가 발생했습니다.</h1>
      </div>
    );
  }

  //데이터 없는 경우
  if (!movieData?.results) {
    return (
      <div>
        <h1 style={{ color: "white" }}>표시할 영화가 없습니다.</h1>
      </div>
    );
  }

  return (
    <S.Container>
      {/* data.results로 가져와 줌 -> 페이지마다 배열형식 results로 값이 들어오기 때문 */}
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
