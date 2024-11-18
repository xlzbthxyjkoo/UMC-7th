import React, { createContext, useContext, useMemo } from "react";
// import { authApi } from "../apis/authApi";
import { useGetMe } from "../hooks/useUserQueries";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../hooks/queryKeys";

// React Context 생성
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  // useGetMe 훅을 통해 사용자 정보를 가져옴
  const { data: user, isLoading: loading } = useGetMe();

  const value = useMemo(
    () => ({
      user,
      loading,
      // 사용자 정보를 React Query 캐시에서 업데이트하는 함수
      setUser: () => {
        queryClient.setQueryData(queryKeys.user.me(), null);
      },
    }),
    [user, loading, queryClient]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
