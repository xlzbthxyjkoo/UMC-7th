import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "../styles/SignupStyle";
import { useSignup } from "../hooks/useSignup";

interface SignupFormInputs {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignupPage: React.FC = () => {
  const { signup, isLoading, error } = useSignup();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다")
      .required("이메일은 필수 입력사항입니다"),
    password: yup
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
      .max(16, "비밀번호는 최대 16자까지 가능합니다")
      .required("비밀번호는 필수 입력사항입니다"),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다")
      .required("비밀번호 확인은 필수 입력사항입니다"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: SignupFormInputs) => {
    await signup({
      email: data.email,
      password: data.password,
      passwordCheck: data.passwordCheck,
    });
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <S.Input
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email")}
            hasError={!!errors.email}
          />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
            hasError={!!errors.password}
          />
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            {...register("passwordCheck")}
            hasError={!!errors.passwordCheck}
          />
          {errors.passwordCheck && (
            <S.ErrorMessage>{errors.passwordCheck.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.SubmitButton
          type="submit"
          disabled={!isValid || isLoading}
          isValid={isValid}
        >
          {isLoading ? "처리중..." : "가입하기"}
        </S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default SignupPage;
