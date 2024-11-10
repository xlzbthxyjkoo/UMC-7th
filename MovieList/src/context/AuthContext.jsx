import React, { createContext, useContext, useState, useEffect } from "react";
import { authApi } from "../apis/authApi";
import { getToken, TOKEN_TYPE } from "../utils/tokenUtils";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        if (getToken(TOKEN_TYPE.ACCESS)) {
          const userData = await authApi.getMe();
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const value = {
    user,
    setUser,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
