import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff0066;
  text-decoration: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #ff0066;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0052;
  }
`;
