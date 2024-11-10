import axios from "axios";
import { getToken, setToken, TOKEN_TYPE } from "../utils/tokenUtils";

const BASE_URL = "http://localhost:3000";

// axios 인스턴스 생성
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const accessToken = getToken(TOKEN_TYPE.ACCESS);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 토큰이 만료되었고, 재시도하지 않았던 요청인 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 리프레시 토큰으로 새 액세스 토큰 받기
        const refreshToken = getToken(TOKEN_TYPE.REFRESH);
        const response = await axios.post(
          `${BASE_URL}/auth/token/access`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );

        // 새로운 토큰 저장
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        setToken(TOKEN_TYPE.ACCESS, accessToken);
        setToken(TOKEN_TYPE.REFRESH, newRefreshToken);

        // 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (error) {
        // 리프레시 토큰도 만료된 경우 로그아웃
        clearTokens();
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
