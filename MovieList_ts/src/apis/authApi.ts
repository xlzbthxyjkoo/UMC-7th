import { api } from "./axios";
import { setToken, clearTokens, TOKEN_TYPE } from "../utils/tokenUtils";
import { UserData, AuthResponse, UserProfile } from "./types";

export const authApi = {
  register: async (userData: UserData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/register", {
      email: userData.email,
      password: userData.password,
      passwordCheck: userData.passwordCheck, // passwordCheck 포함
    });
    return response.data;
  },

  login: async (
    userData: Pick<UserData, "email" | "password">
  ): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/login", userData);
    const { accessToken, refreshToken } = response.data;
    setToken(TOKEN_TYPE.ACCESS, accessToken);
    setToken(TOKEN_TYPE.REFRESH, refreshToken);
    return response.data;
  },

  logout: (): void => {
    clearTokens();
  },

  getMe: async (): Promise<UserProfile> => {
    const response = await api.get<UserProfile>("/user/me");
    return response.data;
  },
};
