import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authApi } from "../apis/authApi";
import { queryKeys } from "./queryKeys";
import { useAuth } from "../context/AuthContext";

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (userData) => authApi.register(userData),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      // Yup validation과 호환되는 에러 형식으로 변환
      const errorMessage =
        error?.response?.data?.message || "회원가입 중 오류가 발생했습니다.";
      return Promise.reject(new Error(errorMessage));
    },
  });
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (userData) => authApi.login(userData),
    onSuccess: async () => {
      // queryKeys 상수를 사용하여 사용자 정보 조회
      const userInfo = await queryClient.fetchQuery({
        queryKey: queryKeys.user.me(),
        queryFn: authApi.getMe,
      });

      if (setUser) {
        setUser(userInfo);
      }

      // 캐시 데이터 초기화 (필요한 경우)
      queryClient.invalidateQueries(queryKeys.user.all);

      navigate("/");
    },
    onError: (error) => {
      // useForm 호환 에러 메시지 형식
      const errorMessage =
        error?.response?.data?.message || "로그인 중 오류가 발생했습니다.";
      return Promise.reject(new Error(errorMessage));
    },
  });
};
