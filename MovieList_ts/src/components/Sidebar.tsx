import React from "react";
import * as S from "../styles/SidebarStyle";
import { IoMdSearch } from "react-icons/io";
import { PiFilmSlateDuotone } from "react-icons/pi";

const Sidebar: React.FC = () => {
  return (
    <S.SidebarWrapper>
      <S.SidebarLink to="/search">
        <IoMdSearch />
        <S.SidebarText>찾기</S.SidebarText>
      </S.SidebarLink>
      <S.SidebarLink to="/movies">
        <PiFilmSlateDuotone />
        <S.SidebarText>영화</S.SidebarText>
      </S.SidebarLink>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
