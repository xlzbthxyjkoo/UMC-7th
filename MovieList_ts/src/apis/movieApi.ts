import { axiosInstance } from "./axios-instance";
import { Movie, MovieDetails, MovieResponse, MovieCredits } from "./types";

interface MovieApiParams {
  page?: number;
  pageParam?: number;
}

interface SearchMovieParams {
  query: string;
  page?: number;
}

export const movieApi = {
  getNowPlaying: async ({ page = 1 }: MovieApiParams) => {
    try {
      const response = await axiosInstance.get<MovieResponse>(
        `/movie/now_playing?language=ko-KR&page=${page}`
      );
      console.log("API 응답 데이터 (getNowPlaying):", response.data);
      return response.data;
    } catch (error) {
      console.error("API 호출 실패 (getNowPlaying):", error);
      throw error;
    }
  },

  getPopular: async ({ pageParam = 1 }: MovieApiParams) => {
    return axiosInstance.get<MovieResponse>(
      `/movie/popular?language=ko-KR&page=${pageParam}`
    );
  },

  getTopRated: async ({ pageParam = 1 }: MovieApiParams) => {
    return axiosInstance.get<MovieResponse>(
      `/movie/top_rated?language=ko-KR&page=${pageParam}`
    );
  },

  getUpcoming: async ({ pageParam = 1 }: MovieApiParams) => {
    return axiosInstance.get<MovieResponse>(
      `/movie/upcoming?language=ko-KR&page=${pageParam}`
    );
  },

  getMovieDetails: async (movieId: number) => {
    const response = await axiosInstance.get<MovieDetails>(
      `/movie/${movieId}?language=ko-KR`
    );
    return response.data;
  },

  getMovieCredits: async (movieId: number) => {
    const response = await axiosInstance.get<MovieCredits>(
      `/movie/${movieId}/credits?language=ko-KR`
    );
    return response.data;
  },

  searchMovies: async ({ query, page = 1 }: SearchMovieParams) => {
    const response = await axiosInstance.get<MovieResponse>(
      `/search/movie?query=${encodeURIComponent(
        query
      )}&language=ko-KR&page=${page}`
    );
    return response.data;
  },
};
