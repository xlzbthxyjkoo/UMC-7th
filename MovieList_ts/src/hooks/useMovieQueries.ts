import {
  useQuery,
  useInfiniteQuery,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { movieApi } from "../apis/movieApi";
import { queryKeys } from "./queryKeys";
import { MovieCredits, MovieDetails, MovieResponse } from "../apis/types";

export const useMovieQueries = {
  useNowPlayingPagination: (page: number = 1) => {
    return useQuery<MovieResponse>({
      queryKey: queryKeys.movies.nowPlaying(page),
      queryFn: () => movieApi.getNowPlaying({ page }), // API 함수 결과를 그대로 반환
      staleTime: 1000 * 60 * 5,
    });
  },

  useInfinitePopular: () => {
    return useInfiniteQuery<MovieResponse>({
      queryKey: queryKeys.movies.infinite.popular(),
      queryFn: async (context: QueryFunctionContext) => {
        const response = await movieApi.getPopular({
          pageParam: context.pageParam as number,
        });
        return response.data;
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  },

  useInfiniteTopRated: () => {
    return useInfiniteQuery<MovieResponse>({
      queryKey: queryKeys.movies.infinite.topRated(),
      queryFn: async (context: QueryFunctionContext) => {
        const response = await movieApi.getTopRated({
          pageParam: context.pageParam as number,
        });
        return response.data;
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  },

  useInfiniteUpcoming: () => {
    return useInfiniteQuery<MovieResponse>({
      queryKey: queryKeys.movies.infinite.upcoming(),
      queryFn: async (context: QueryFunctionContext) => {
        const response = await movieApi.getUpcoming({
          pageParam: context.pageParam as number,
        });
        return response.data;
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  },

  useSearchMovies: (query: string) => {
    return useInfiniteQuery<MovieResponse>({
      queryKey: queryKeys.movies.search(query),
      queryFn: async (context: QueryFunctionContext) => {
        return await movieApi.searchMovies({
          // .data 제거
          query,
          page: context.pageParam as number,
        });
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
      enabled: !!query,
    });
  },

  useMovieDetails: (movieId: number) => {
    return useQuery<MovieDetails>({
      queryKey: queryKeys.movies.detail(movieId),
      queryFn: async () => {
        return await movieApi.getMovieDetails(movieId);
      },
      enabled: !!movieId,
    });
  },

  useMovieCredits: (movieId: number) => {
    return useQuery<MovieCredits>({
      queryKey: queryKeys.movies.credits(movieId),
      queryFn: async () => {
        return await movieApi.getMovieCredits(movieId);
      },
      enabled: !!movieId,
    });
  },
};
