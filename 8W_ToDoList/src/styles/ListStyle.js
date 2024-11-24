import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const TodoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 16px;
`;

export const TodoTitle = styled.div`
  font-size: 14px;
  color: #000;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

export const TodoSubtext = styled.div`
  font-size: 12px;
  color: #6c757d;
`;

export const CheckboxContainer = styled.div`
  margin-right: 12px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.variant === "delete" ? "#dc3545" : "#6c757d"};
  color: white;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  color: #000; // 텍스트 색상 추가
  background-color: #fff;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`;
