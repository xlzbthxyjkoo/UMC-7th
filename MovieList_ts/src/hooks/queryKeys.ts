type QueryKeyType = readonly unknown[];

interface QueryKeys {
  movies: {
    all: QueryKeyType;
    nowPlaying: (page: number) => QueryKeyType;
    infinite: {
      popular: () => QueryKeyType;
      topRated: () => QueryKeyType;
      upcoming: () => QueryKeyType;
    };
    detail: (movieId: number) => QueryKeyType;
    credits: (movieId: number) => QueryKeyType;
    search: (query: string) => QueryKeyType;
  };
  user: {
    all: QueryKeyType;
    me: () => QueryKeyType;
  };
}

export const queryKeys: QueryKeys = {
  movies: {
    all: ["movies"],
    nowPlaying: (page) => [...queryKeys.movies.all, "nowPlaying", page],
    infinite: {
      popular: () => [...queryKeys.movies.all, "popular", "infinite"],
      topRated: () => [...queryKeys.movies.all, "topRated", "infinite"],
      upcoming: () => [...queryKeys.movies.all, "upcoming", "infinite"],
    },
    detail: (movieId) => [...queryKeys.movies.all, "detail", movieId],
    credits: (movieId) => [...queryKeys.movies.all, "credits", movieId],
    search: (query) => [...queryKeys.movies.all, "search", "infinite", query],
  },
  user: {
    all: ["user"],
    me: () => [...queryKeys.user.all, "me"],
  },
};
