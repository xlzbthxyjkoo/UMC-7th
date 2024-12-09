import ModalButton from "./ModalButton";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(closeModal());
        }
      }}
    >
      <ModalContent>
        {children}
        <ModalButton />
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  text-align: center;
`;

export default Modal;
