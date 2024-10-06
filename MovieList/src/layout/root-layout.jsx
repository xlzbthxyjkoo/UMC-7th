import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import * as S from "../styles/LayoutStyle";

const RootLayout = () => {
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
