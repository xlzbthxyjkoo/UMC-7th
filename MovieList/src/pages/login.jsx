import React, { useState, useEffect } from "react";
import * as S from "../styles/LoginStyle";
import useForm from "../hooks/useForm";
import { validateLogin } from "../utils/validate";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const { login, isLoading, error } = useLogin(); // useLogin hook 사용

  const initialValues = {
    email: "",
    password: "",
  };

  const formLogin = useForm(initialValues, validateLogin);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isFormValid =
      formLogin.values.email &&
      formLogin.values.password &&
      Object.keys(formLogin.errors).every((key) => !formLogin.errors[key]);

    setIsValid(isFormValid);
  }, [formLogin.values, formLogin.errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      await login({
        email: formLogin.values.email,
        password: formLogin.values.password,
      });
    }
  };

  return (
    <S.FormContainer>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={handleSubmit}>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

        <S.InputWrapper>
          <S.Input
            type="email"
            name="email"
            {...formLogin.getTextInputProps("email")}
            placeholder="이메일을 입력해주세요!"
            hasError={formLogin.errors.email && formLogin.touched.email}
          />
          {formLogin.errors.email && formLogin.touched.email && (
            <S.ErrorMessage>{formLogin.errors.email}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="password"
            name="password"
            {...formLogin.getTextInputProps("password")}
            placeholder="비밀번호를 입력해주세요!"
            hasError={formLogin.errors.password && formLogin.touched.password}
          />
          {formLogin.errors.password && formLogin.touched.password && (
            <S.ErrorMessage>{formLogin.errors.password}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.LoginButton
          type="submit"
          disabled={!isValid || isLoading}
          isValid={isValid}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </S.LoginButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default LoginPage;
