import { useLoginMutation } from "./authMutations";

export const useLogin = () => {
  const mutation = useLoginMutation();

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error?.message,
  };
};
