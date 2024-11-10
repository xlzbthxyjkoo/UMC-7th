import React from "react";
import * as S from "../styles/NavbarStyle";
import { useAuth } from "../context/AuthContext";
import { authApi } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  // 이메일에서 닉네임 추출 (@ 앞부분)
  const getNickname = (email) => {
    return email.split("@")[0];
  };

  // 로그아웃 처리
  const handleLogout = () => {
    authApi.logout(); // 토큰 삭제
    setUser(null); // 유저 정보 초기화
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <S.NavbarContainer>
      <S.Logo to="/">YONGCHA</S.Logo>
      <S.ButtonGroup>
        {user ? (
          <>
            <S.UserInfo>{getNickname(user.email)}님 반갑습니다</S.UserInfo>
            <S.StyledButton as="button" onClick={handleLogout}>
              로그아웃
            </S.StyledButton>
          </>
        ) : (
          <>
            <S.StyledButton to="/login">로그인</S.StyledButton>
            <S.StyledButton to="/signup">회원가입</S.StyledButton>
          </>
        )}
      </S.ButtonGroup>
    </S.NavbarContainer>
  );
};

export default Navbar;
