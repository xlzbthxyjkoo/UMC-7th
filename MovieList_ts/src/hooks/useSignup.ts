import { useSignupMutation } from "./authMutation";

export const useSignup = () => {
  const mutation = useSignupMutation();

  return {
    signup: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error?.message,
  };
};
