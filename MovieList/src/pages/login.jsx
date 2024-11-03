import React, { useState, useEffect } from "react";
import * as S from "../styles/LoginStyle";
import useForm from "../hooks/useForm";
import { validateLogin } from "../utils/validate";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const login = useForm(initialValues, validateLogin);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isFormValid =
      login.values.email &&
      login.values.password &&
      Object.keys(login.errors).every((key) => !login.errors[key]);

    setIsValid(isFormValid);
  }, [login.values, login.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Form submitted:", login.values);
    }
  };

  return (
    <S.FormContainer>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Input
            type="email"
            name="email"
            {...login.getTextInputProps("email")}
            placeholder="이메일을 입력해주세요!"
            hasError={login.errors.email && login.touched.email}
          />
          {login.errors.email && login.touched.email && (
            <S.ErrorMessage>{login.errors.email}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="password"
            name="password"
            {...login.getTextInputProps("password")}
            placeholder="비밀번호를 입력해주세요!"
            hasError={login.errors.password && login.touched.password}
          />
          {login.errors.password && login.touched.password && (
            <S.ErrorMessage>{login.errors.password}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.LoginButton type="submit" disabled={!isValid} isValid={isValid}>
          로그인
        </S.LoginButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default LoginPage;
