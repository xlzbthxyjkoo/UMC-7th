/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_KEY: string;
  readonly VITE_MOVIE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
