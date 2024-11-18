// src/components/Navbar.jsx
import React from "react";
import * as S from "../styles/NavbarStyle";
import { useAuth } from "../context/AuthContext";
import { authApi } from "../apis/authApi";
import { useNavigate } from "react-router-dom";
import { queryKeys } from "../hooks/queryKeys";
import { useQueryClient } from "@tanstack/react-query";

const Navbar = () => {
  // AuthContext에서 user 정보와 setUser 함수를 가져옴
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  // React Query의 queryClient 인스턴스를 가져옴 (캐시 조작을 위해)
  const queryClient = useQueryClient();

  // const getNickname = (email) => {
  //   return email?.split("@")[0];
  // };

  const handleLogout = () => {
    // 로그아웃 처리 (토큰 삭제)
    authApi.logout();

    // React Query 캐시에서 사용자 정보를 즉시 제거 (UI 즉시 업데이트를 위해)
    queryClient.setQueryData(queryKeys.user.me(), null);

    navigate("/");
  };

  return (
    <S.NavbarContainer>
      <S.Logo to="/">YONGCHA</S.Logo>
      <S.ButtonGroup>
        {user ? (
          <>
            <S.UserInfo>{user.email?.split("@")[0]}님 반갑습니다</S.UserInfo>
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
