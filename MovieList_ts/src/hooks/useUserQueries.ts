import { useQuery } from "@tanstack/react-query";
import { authApi } from "../apis/authApi";
import { queryKeys } from "./queryKeys";
import { UserProfile } from "../apis/types";

export const useGetMe = () => {
  const token = localStorage.getItem("accessToken");

  return useQuery<UserProfile, Error>({
    queryKey: queryKeys.user.me(),
    queryFn: async () => {
      try {
        return await authApi.getMe();
      } catch (error) {
        localStorage.removeItem("accessToken");
        throw error;
      }
    },
    retry: 0,
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    enabled: !!token,
    networkMode: "always",
  });
};
