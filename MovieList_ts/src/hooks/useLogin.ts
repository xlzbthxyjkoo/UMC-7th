import { useLoginMutation } from "./authMutation";

export const useLogin = () => {
  const mutation = useLoginMutation();

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error?.message || null,
  };
};

export default useLogin;
