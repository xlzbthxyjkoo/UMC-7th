import { useState } from "react";
import { authApi } from "../apis/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { queryKeys } from "./queryKeys";
import { useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  const login = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);

      await authApi.login(userData);

      // 로그인 성공 후 즉시 사용자 정보 가져오기
      // fetchQuery를 사용하여 캐시를 즉시 업데이트하고 UI를 리프레시
      await queryClient.fetchQuery({
        queryKey: queryKeys.user.me(),
        queryFn: authApi.getMe,
      });

      navigate("/");
    } catch (err) {
      setError(
        err?.response?.data?.message || "로그인 중 오류가 발생했습니다."
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
