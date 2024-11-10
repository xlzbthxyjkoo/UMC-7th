export const TOKEN_TYPE = {
  ACCESS: "accessToken",
  REFRESH: "refreshToken",
};

export const getToken = (type) => localStorage.getItem(type);
export const setToken = (type, token) => localStorage.setItem(type, token);
export const removeToken = (type) => localStorage.removeItem(type);
export const clearTokens = () => {
  removeToken(TOKEN_TYPE.ACCESS);
  removeToken(TOKEN_TYPE.REFRESH);
};
