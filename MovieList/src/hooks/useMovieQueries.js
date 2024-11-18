import { useQuery } from "@tanstack/react-query";
import { movieApi } from "../apis/movieApi";
import { queryKeys } from "./queryKeys";

export const useMovieQueries = {
  useNowPlaying: () => {
    return useQuery({
      queryKey: queryKeys.movies.nowPlaying(),
      queryFn: () => movieApi.getNowPlaying().then((res) => res.data),
    });
  },

  usePopular: () => {
    return useQuery({
      queryKey: queryKeys.movies.popular(),
      queryFn: () => movieApi.getPopular().then((res) => res.data),
    });
  },

  useTopRated: () => {
    return useQuery({
      queryKey: queryKeys.movies.topRated(),
      queryFn: () => movieApi.getTopRated().then((res) => res.data),
    });
  },

  useUpcoming: () => {
    return useQuery({
      queryKey: queryKeys.movies.upcoming(),
      queryFn: () => movieApi.getUpcoming().then((res) => res.data),
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
