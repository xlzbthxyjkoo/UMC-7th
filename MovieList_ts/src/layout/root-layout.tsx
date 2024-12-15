import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import * as S from "../styles/LayoutStyle";
import LoginPage from "../pages/login";

const RootLayout: React.FC = () => {
  return (
    <S.LayoutWrapper>
      <S.NavbarWrapper>
        <Navbar />
      </S.NavbarWrapper>
      <S.MainContent>
        <S.SidebarWrapper>
          <Sidebar />
        </S.SidebarWrapper>
        <S.ContentArea>
          <Outlet />
        </S.ContentArea>
      </S.MainContent>
    </S.LayoutWrapper>
  );
};

export default RootLayout;
