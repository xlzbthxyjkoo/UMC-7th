import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-bottom: 15px;

  &:hover {
    color: #ff0066;
  }
`;

export const SidebarText = styled.span`
  margin-left: 10px;
`;
