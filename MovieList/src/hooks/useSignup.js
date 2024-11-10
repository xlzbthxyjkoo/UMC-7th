import { useState } from "react";
import { authApi } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signup = async (userData) => {
    try {
      setIsLoading(true);
      setError(null);
      await authApi.register(userData);
      // 회원가입 성공 후 로그인 페이지로 이동
      navigate("/login");
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
