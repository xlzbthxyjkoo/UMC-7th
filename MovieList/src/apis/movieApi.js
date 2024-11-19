import { axiosInstance } from "./axios-instance";

export const movieApi = {
  getNowPlaying: ({ pageParam = 1 }) =>
    axiosInstance.get(`/movie/now_playing?language=ko-KR&page=${pageParam}`),

  getPopular: ({ pageParam = 1 }) =>
    axiosInstance.get(`/movie/popular?language=ko-KR&page=${pageParam}`),

  getTopRated: ({ pageParam = 1 }) =>
    axiosInstance.get(`/movie/top_rated?language=ko-KR&page=${pageParam}`),

  getUpcoming: ({ pageParam = 1 }) =>
    axiosInstance.get(`/movie/upcoming?language=ko-KR&page=${pageParam}`),

  getMovieDetails: (movieId) =>
    axiosInstance.get(`/movie/${movieId}?language=ko-KR`),

  getMovieCredits: (movieId) =>
    axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`),

  searchMovies: (query) =>
    axiosInstance.get(
      `/search/movie?query=${encodeURIComponent(query)}&language=ko-KR&page=1`
    ),
};
