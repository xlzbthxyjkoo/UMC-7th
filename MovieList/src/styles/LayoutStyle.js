import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 60px; // Navbar의 높이만큼 여백 추가
`;

export const SidebarWrapper = styled.div`
  width: 190px;
  background-color: #1a1a1a;
  position: fixed;
  top: 60px; // Navbar 아래에 위치
  left: 0;
  bottom: 0;
  overflow-y: auto;
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #121212;
  margin-left: 190px; // Sidebar의 너비만큼 여백 추가
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;
