import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";
import styled from "styled-components";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <Nav>
      <NavCenter>
        <h3>REAL DATA UMC PlayList</h3>
        <NavContainer>
          <CartIconWrapper>
            <CartIcon />
            <AmountBadge>
              <p>{amount}</p>
            </AmountBadge>
          </CartIconWrapper>
        </NavContainer>
      </NavCenter>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #645cff;
  padding: 1.25rem 2rem;
`;

const NavCenter = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: white;
    margin-bottom: 0;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
  }
`;

const AmountBadge = styled.div`
  position: absolute;
  top: -0.85rem;
  right: -1.5rem;
  // background: #dc2626;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
`;

const CartIconWrapper = styled.div`
  position: relative;
`;

export default Navbar;
