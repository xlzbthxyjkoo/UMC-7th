export interface UserData {
  email: string;
  password: string;
  passwordCheck?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user?: UserProfile;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  backdrop_path?: string;
  vote_count: number;
  popularity: number;
  original_language: string;
  release_date: string;
  overview: string;
  poster_path?: string; // Optional 속성으로 정의
  vote_average: number;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  runtime: number;
  status: string;
  tagline: string | null;
  budget: number;
  revenue: number;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

// 캐스트와 크루 관련 타입
export interface MovieCredits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  profile_path: string | null;
}

// API 에러 관련 타입
export interface ErrorResponse {
  status_message: string;
  status_code: number;
}

// API 파라미터 관련 타입
export interface MovieApiParams {
  page?: number;
  pageParam?: number;
}

export interface SearchMovieParams extends MovieApiParams {
  query: string;
}

// 로그인 폼 타입
export interface LoginFormValues {
  email: string;
  password: string;
}

// 회원가입 폼 타입
export interface SignupFormValues {
  email: string;
  password: string;
  passwordCheck: string;
}

// 폼 에러 타입
export interface FormErrors {
  email?: string;
  password?: string;
  passwordCheck?: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  setUser: (user: UserProfile | null) => void;
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  content: string;
  createdAt: string;
  userImage: string;
}

export interface ApiErrorResponse {
  message: string;
  status?: number;
}

export interface TokenRefreshResponse {
  accessToken: string;
  refreshToken: string;
}
