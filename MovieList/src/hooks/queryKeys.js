export const queryKeys = {
  movies: {
    all: ["movies"],
    infinite: {
      nowPlaying: () => [...queryKeys.movies.all, "nowPlaying", "infinite"],
      popular: () => [...queryKeys.movies.all, "popular", "infinite"],
      topRated: () => [...queryKeys.movies.all, "topRated", "infinite"],
      upcoming: () => [...queryKeys.movies.all, "upcoming", "infinite"],
    },
    detail: (movieId) => [...queryKeys.movies.all, "detail", movieId],
    credits: (movieId) => [...queryKeys.movies.all, "credits", movieId],
    search: (query) => [...queryKeys.movies.all, "search", query],
  },
  user: {
    all: ["user"],
    me: () => [...queryKeys.user.all, "me"],
  },
};
