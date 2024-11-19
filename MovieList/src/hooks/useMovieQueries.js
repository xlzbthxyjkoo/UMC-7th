import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { movieApi } from "../apis/movieApi";
import { queryKeys } from "./queryKeys";

export const useMovieQueries = {
  useInfiniteNowPlaying: () => {
    return useInfiniteQuery({
      queryKey: queryKeys.movies.infinite.nowPlaying(),
      queryFn: movieApi.getNowPlaying,
      getNextPageParam: (lastPage) => {
        // TMDB API는 total_pages를 제공
        if (lastPage.data.page < lastPage.data.total_pages) {
          return lastPage.data.page + 1;
        }
        return undefined;
      },
    });
  },

  //무한 스크롤 데이터 가져오도록
  useInfinitePopular: () => {
    return useInfiniteQuery({
      queryKey: queryKeys.movies.infinite.popular(),
      // API 호출 함수 - pageParam은 useInfiniteQuery가 자동으로 관리
      queryFn: movieApi.getPopular,
      // 다음 페이지 존재 여부를 결정하는 함수
      getNextPageParam: (lastPage) => {
        // TMDB API는 total_pages 정보를 제공
        // 현재 페이지가 전체 페이지보다 작으면 다음 페이지 번호 반환
        if (lastPage.data.page < lastPage.data.total_pages) {
          return lastPage.data.page + 1;
        }
        // 다음 페이지가 없으면 undefined 반환 (무한 스크롤 중단)
        return undefined;
      },
    });
  },

  useInfiniteTopRated: () => {
    return useInfiniteQuery({
      queryKey: queryKeys.movies.infinite.topRated(),
      queryFn: movieApi.getTopRated,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.page < lastPage.data.total_pages) {
          return lastPage.data.page + 1;
        }
        return undefined;
      },
    });
  },

  useInfiniteUpcoming: () => {
    return useInfiniteQuery({
      queryKey: queryKeys.movies.infinite.upcoming(),
      queryFn: movieApi.getUpcoming,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.page < lastPage.data.total_pages) {
          return lastPage.data.page + 1;
        }
        return undefined;
      },
    });
  },

  useMovieDetails: (movieId) => {
    return useQuery({
      queryKey: queryKeys.movies.detail(movieId),
      queryFn: () => movieApi.getMovieDetails(movieId).then((res) => res.data),
      enabled: !!movieId,
    });
  },

  useMovieCredits: (movieId) => {
    return useQuery({
      queryKey: queryKeys.movies.credits(movieId),
      queryFn: () => movieApi.getMovieCredits(movieId).then((res) => res.data),
      enabled: !!movieId,
    });
  },
  useSearchMovies: (query) => {
    return useQuery({
      queryKey: queryKeys.movies.search(query),
      queryFn: () => movieApi.searchMovies(query).then((res) => res.data),
      enabled: !!query, // 검색어가 있을 때만 실행
    });
  },
};
