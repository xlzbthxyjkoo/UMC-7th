import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";
import styled from "styled-components";

const CartContainer = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <Section>
      <Header>
        <h2>당신이 선택한 음반</h2>
      </Header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <Footer>
        <hr />
        <CartTotal>
          <h4>
            총 가격 <span>{total}원</span>
          </h4>
        </CartTotal>
        <ClearButton onClick={() => dispatch(openModal())}>
          장바구니 초기화
        </ClearButton>
      </Footer>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 1.5rem;
  max-width: 1120px;
  margin: 0 auto;
`;

const Header = styled.header`
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Footer = styled.footer`
  hr {
    background: #645cff;
    border-color: transparent;
    border-width: 1px;
    margin: 3rem auto;
  }
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  h4 {
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

const ClearButton = styled.button`
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background: #991b1b;
  }
`;

export default CartContainer;
