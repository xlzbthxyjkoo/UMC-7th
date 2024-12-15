import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "../apis/authApi";
import { queryKeys } from "./queryKeys";
import { useAuth } from "../context/AuthContext";
import { UserData } from "../apis/types";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData: UserData) => authApi.register(userData),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const errorMessage =
        error.response?.data?.message || "회원가입 중 오류가 발생했습니다.";
      return Promise.reject(new Error(errorMessage));
    },
  });
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (userData: Pick<UserData, "email" | "password">) =>
      authApi.login(userData),
    onSuccess: async () => {
      const userInfo = await queryClient.fetchQuery({
        queryKey: queryKeys.user.me(),
        queryFn: authApi.getMe,
      });

      if (setUser && userInfo) {
        setUser(userInfo);
      }

      queryClient.invalidateQueries({ queryKey: queryKeys.user.all });
      navigate("/");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      const errorMessage =
        error.response?.data?.message || "로그인 중 오류가 발생했습니다.";
      return Promise.reject(new Error(errorMessage));
    },
  });
};
