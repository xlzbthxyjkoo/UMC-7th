export const queryKeys = {
  movies: {
    all: ["movies"],
    nowPlaying: () => [...queryKeys.movies.all, "now-playing"],
    popular: () => [...queryKeys.movies.all, "popular"],
    topRated: () => [...queryKeys.movies.all, "top-rated"],
    upcoming: () => [...queryKeys.movies.all, "upcoming"],
    detail: (movieId) => [...queryKeys.movies.all, "detail", movieId],
    credits: (movieId) => [...queryKeys.movies.all, "credits", movieId],
    search: (query) => [...queryKeys.movies.all, "search", query],
  },
  user: {
    all: ["user"],
    me: () => [...queryKeys.user.all, "me"],
  },
};
