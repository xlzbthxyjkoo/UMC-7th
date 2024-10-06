import React from "react";
import * as S from "../styles/NavbarStyle";

const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.Logo to="/">YONGCHA</S.Logo>
      <S.ButtonGroup>
        <S.StyledButton to="/login">로그인</S.StyledButton>
        <S.StyledButton to="/signup">회원가입</S.StyledButton>
      </S.ButtonGroup>
    </S.NavbarContainer>
  );
};

export default Navbar;
