export enum TOKEN_TYPE {
  ACCESS = "accessToken",
  REFRESH = "refreshToken",
}

export const getToken = (type: TOKEN_TYPE): string | null =>
  localStorage.getItem(type);

export const setToken = (type: TOKEN_TYPE, token: string): void =>
  localStorage.setItem(type, token);

export const removeToken = (type: TOKEN_TYPE): void =>
  localStorage.removeItem(type);

export const clearTokens = (): void => {
  removeToken(TOKEN_TYPE.ACCESS);
  removeToken(TOKEN_TYPE.REFRESH);
};
