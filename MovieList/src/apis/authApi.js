import { api } from "./axios";
import { setToken, clearTokens, TOKEN_TYPE } from "../utils/tokenUtils";

const BASE_URL = "http://localhost:3000/auth";

export const authApi = {
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  login: async (userData) => {
    const response = await api.post("/auth/login", userData);
    const { accessToken, refreshToken } = response.data;
    setToken(TOKEN_TYPE.ACCESS, accessToken);
    setToken(TOKEN_TYPE.REFRESH, refreshToken);
    return response.data;
  },

  logout: () => {
    clearTokens();
  },

  getMe: async () => {
    const response = await api.get("/user/me");
    return response.data;
  },
};
