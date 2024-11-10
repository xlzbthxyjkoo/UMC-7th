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

  //유효성 상태 관리
  const [isValid, setIsValid] = useState(false);

  //폼 입력값이나 에러 상태가 변경될 때마다 유효성 검사
  useEffect(() => {
    const isFormValid =
      login.values.email && //이메일 필드 비어있나??
      login.values.password && //비밀번호 필드 비어있나??
      //모든필드 에러 없는지 확인
      Object.keys(login.errors).every((key) => !login.errors[key]);

    setIsValid(isFormValid);
  }, [login.values, login.errors]); //values나 errors가 변경될 때마다 실행

  //제출
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
