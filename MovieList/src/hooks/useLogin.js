import { useState } from "react";
import { authApi } from "../apis/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const login = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);

      // 로그인
      await authApi.login(userData);

      // 유저 정보 가져오기
      const userInfo = await authApi.getMe();

      // Context 업데이트
      setUser(userInfo);

      // 메인 페이지로 이동
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
