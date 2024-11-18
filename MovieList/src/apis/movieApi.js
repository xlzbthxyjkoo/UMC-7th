import { axiosInstance } from "./axios-instance";

export const movieApi = {
  getNowPlaying: () =>
    axiosInstance.get("/movie/now_playing?language=ko-KR&page=1"),

  getPopular: () => axiosInstance.get("/movie/popular?language=ko-KR&page=1"),

  getTopRated: () =>
    axiosInstance.get("/movie/top_rated?language=ko-KR&page=1"),

  getUpcoming: () => axiosInstance.get("/movie/upcoming?language=ko-KR&page=1"),

  getMovieDetails: (movieId) =>
    axiosInstance.get(`/movie/${movieId}?language=ko-KR`),

  getMovieCredits: (movieId) =>
    axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`),

  searchMovies: (query) =>
    axiosInstance.get(
      `/search/movie?query=${encodeURIComponent(query)}&language=ko-KR&page=1`
    ),
};
