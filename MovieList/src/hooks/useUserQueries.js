import { useQuery } from "@tanstack/react-query";
import { authApi } from "../apis/authApi";
import { queryKeys } from "./queryKeys";

export const useGetMe = () => {
  // localStorage에서 토큰 확인
  const token = localStorage.getItem("accessToken");

  // React Query를 사용하여 사용자 정보를 가져오는 훅
  return useQuery({
    // 쿼리 키 설정 (캐시 키로 사용)
    queryKey: queryKeys.user.me(),
    // API 호출 함수
    queryFn: authApi.getMe,
    retry: 0, // 실패시 재시도 안함
    cacheTime: 0, // 캐시 유지 시간
    staleTime: 0, // 데이터가 'stale' 상태가 되는 시간
    refetchOnMount: true, // 컴포넌트 마운트시 재요청
    refetchOnWindowFocus: true, // 윈도우 포커스시 재요청
    enabled: !!token, // 토큰이 있을 때만 API 호출
    onError: () => {
      // API 호출 실패시 토큰 삭제
      localStorage.removeItem("accessToken");
    },
  });
};
