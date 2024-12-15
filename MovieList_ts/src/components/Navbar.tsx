import React from "react";
import * as S from "../styles/NavbarStyle";
import { useAuth } from "../context/AuthContext";
import { authApi } from "../apis/authApi";
import { useNavigate } from "react-router-dom";
import { queryKeys } from "../hooks/queryKeys";
import { useQueryClient } from "@tanstack/react-query";

const Navbar: React.FC = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    authApi.logout();
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
