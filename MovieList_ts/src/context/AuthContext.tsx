import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { useGetMe } from "../hooks/useUserQueries";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../hooks/queryKeys";
import { UserProfile } from "../apis/types";

interface AuthContextType {
  user: UserProfile | null | undefined;
  loading: boolean;
  setUser: (user: UserProfile | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const { data: user, isLoading: loading } = useGetMe();

  const value = useMemo(
    () => ({
      user,
      loading,
      setUser: (newUser: UserProfile | null) => {
        queryClient.setQueryData(queryKeys.user.me(), newUser);
      },
    }),
    [user, loading, queryClient]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
