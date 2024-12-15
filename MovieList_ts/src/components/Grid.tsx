import { useState, useRef, useCallback } from "react";
import * as S from "../styles/GridStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { useMovieQueries } from "../hooks/useMovieQueries";
import LoadingSpinner from "./LoadingSpinner";
import { Pagination } from "./Pagination";
import { Movie } from "../apis/types";

interface GridProps {
  searchQuery?: string;
}

const Grid: React.FC<GridProps> = ({ searchQuery }) => {
  const [page, setPage] = useState<number>(1);
  const location = useLocation();
  const navigate = useNavigate();
  const observerRef = useRef<IntersectionObserver>();
  const path = location.pathname.split("/").pop() || "";

  const isNowPlaying = path === "now-playing";

  const getQueryHook = () => {
    if (searchQuery) {
      return useMovieQueries.useSearchMovies(searchQuery);
    }
    if (isNowPlaying) {
      return useMovieQueries.useNowPlayingPagination(page);
    }
    const queryHooks = {
      popular: useMovieQueries.useInfinitePopular,
      "top-rated": useMovieQueries.useInfiniteTopRated,
      "up-coming": useMovieQueries.useInfiniteUpcoming,
    };
    return (
      queryHooks[path as keyof typeof queryHooks]?.() ||
      useMovieQueries.useInfinitePopular()
    );
  };

  const {
    data,
    isLoading,
    isError,
    hasNextPage = false,
    fetchNextPage = () => {},
    isFetchingNextPage = false,
  } = getQueryHook() as any;

  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading || isNowPlaying) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasNextPage, fetchNextPage]
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  const renderMovies = () => {
    if (isNowPlaying) {
      return data?.results?.map((movie: Movie) => (
        <S.Item key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
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
      ));
    }

    return data?.pages?.flatMap((page: { results: Movie[] }) =>
      page.results.map((movie: Movie, index: number) => (
        <S.Item
          key={movie.id}
          ref={index === page.results.length - 1 ? lastMovieRef : null}
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
    );
  };

  if (isLoading) {
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
  }

  if (isError) return <div>에러가 발생했습니다.</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  if (searchQuery && data?.pages?.[0]?.results.length === 0) {
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
      <S.Container>{renderMovies()}</S.Container>

      {isNowPlaying && data && (
        <Pagination
          currentPage={page}
          totalPages={data.total_pages}
          onPageChange={handlePageChange}
        />
      )}

      {!isNowPlaying && isFetchingNextPage && <LoadingSpinner />}
    </S.GridWrapper>
  );
};

export default Grid;
