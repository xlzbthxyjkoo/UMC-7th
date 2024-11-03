import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  /* 화면 중앙 정렬을 위한 스타일 추가 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.hasError ? "#ff4444" : "#ddd")};
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${(props) => (props.hasError ? "#ff4444" : "#666")};
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 14px;
  margin-top: 4px;
`;

export const LoginButton = styled.button`
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: ${(props) => (props.isValid ? "pointer" : "not-allowed")};
  background-color: ${(props) => (props.isValid ? "#e75480" : "#cccccc")};
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isValid ? "#d64472" : "#cccccc")};
  }
`;
