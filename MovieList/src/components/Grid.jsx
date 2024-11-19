import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "../styles/GridStyle";
// import useCustomFetch from "../hooks/useCustomFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { useMovieQueries } from "../hooks/useMovieQueries";
import LoadingSpinner from "./LoadingSpinner";
import { Pagination } from "./Pagination";

const Grid = ({ searchQuery }) => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  // Intersection Observer를 위한 ref
  const observerRef = useRef();
  const path = location.pathname.split("/").pop();

  // now-playing 페이지일 때는 페이지네이션, 나머지는 무한 스크롤
  const isNowPlaying = path === "now-playing";

  // URL 경로에 따라 적절한 무한 스크롤 훅을 선택
  const getQueryHook = () => {
    if (searchQuery) {
      return useMovieQueries.useSearchMovies(searchQuery);
    }

    // now-playing은 페이지네이션, 나머지는 무한 스크롤
    if (isNowPlaying) {
      return useMovieQueries.useNowPlayingPagination(page);
    }

    const queryHooks = {
      popular: useMovieQueries.useInfinitePopular,
      "top-rated": useMovieQueries.useInfiniteTopRated,
      "up-coming": useMovieQueries.useInfiniteUpcoming,
    };
    return queryHooks[path]?.() || useMovieQueries.useInfinitePopular();
  };

  // useInfiniteQuery의 반환값들
  const {
    data, // 페이지별로 구성된 영화 데이터
    isLoading, // 초기 로딩 상태
    isError, // 에러 상태
    hasNextPage, // 다음 페이지 존재 여부
    fetchNextPage, // 다음 페이지 데이터를 가져오는 함수
    isFetchingNextPage, // 추가 페이지 로딩 상태
  } = getQueryHook();

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  // Intersection Observer 설정
  const lastMovieRef = useCallback(
    (node) => {
      if (isLoading || isNowPlaying) return; // now-playing이면 observer 사용 안 함

      // 이전 observer 정리
      if (observerRef.current) observerRef.current.disconnect();

      // 새로운 observer 설정
      observerRef.current = new IntersectionObserver((entries) => {
        // 마지막 아이템이 화면에 보이고, 다음 페이지가 있으면
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage(); // 다음 페이지 데이터 로드
        }
      });

      // 마지막 아이템 관찰 시작
      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasNextPage, fetchNextPage]
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
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
  if (isError) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  // 검색 결과가 없는 경우
  if (searchQuery && data?.pages[0]?.data.results.length === 0) {
    return (
      <div>
        <h1 style={{ color: "white" }}>
          검색하신 "{searchQuery}" 영화를 찾을 수 없습니다
        </h1>
      </div>
    );
  }

  return (
    <S.GridWrapper>
      <S.Container>
        {isNowPlaying
          ? // 페이지네이션 뷰
            data?.data?.results.map((movie) => (
              <S.Item
                key={movie.id}
                onClick={() => navigate(`/movies/${movie.id}`)}
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
            ))
          : // 무한 스크롤 뷰
            data?.pages?.map((page) =>
              page.data.results.map((movie, index) => (
                <S.Item
                  key={movie.id}
                  ref={
                    index === page.data.results.length - 1 ? lastMovieRef : null
                  }
                  onClick={() => navigate(`/movies/${movie.id}`)}
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
              ))
            )}
      </S.Container>

      {/* now-playing일 때만 페이지네이션 표시 */}
      {isNowPlaying && data?.data && (
        <Pagination
          currentPage={page}
          totalPages={data.data.total_pages}
          onPageChange={handlePageChange}
        />
      )}

      {/* 무한 스크롤 로딩 스피너 */}
      {!isNowPlaying && isFetchingNextPage && <LoadingSpinner />}
    </S.GridWrapper>
  );
};

export default Grid;
