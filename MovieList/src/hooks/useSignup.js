import { useSignupMutation } from "./authMutations";

export const useSignup = () => {
  const mutation = useSignupMutation();

  return {
    signup: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error?.message,
  };
};
