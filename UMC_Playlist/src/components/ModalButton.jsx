import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
import styled from "styled-components";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <Button
        type="button"
        $confirm
        onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal());
        }}
      >
        네
      </Button>
      <Button
        type="button"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        아니요
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  background: ${(props) => (props.$confirm ? "#645cff" : "#dc2626")};
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => (props.$confirm ? "#3c3799" : "#991b1b")};
  }
`;

export default ModalButton;
