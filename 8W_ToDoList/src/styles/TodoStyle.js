import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.variant === "delete" ? "#dc3545" : "#6c757d"};
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: #4a90e2;
    margin: 16px auto 0;
    border-radius: 2px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  background-color: #f8f9fa;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const LogoTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;

  &::before,
  &::after {
    content: "⚡";
    margin: 0 8px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background-color: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CheckboxContainer = styled.div`
  margin-right: 12px;
`;

export const TodoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin: 50px auto 70px;
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 16px 45px;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  color: #333;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;
  display: flex;
  align-items: center;
`;

export const SubmitButton = styled(StyledButton)`
  background-color: #4285f4;
  color: white;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border-radius: 24px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(66, 133, 244, 0.3);

  &:hover {
    background-color: #357abd;
    box-shadow: 0 4px 8px rgba(66, 133, 244, 0.4);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(66, 133, 244, 0.3);
  }

  &:disabled {
    background-color: #a4c2f4;
    box-shadow: none;
    transform: none;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  text-align: center;
  margin: 20px 0;
  padding: 12px;
  background-color: #f8d7da;
  border-radius: 8px;
  border: 1px solid #f5c6cb;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  margin: 20px 0;
  color: #4a90e2;
  font-size: 18px;
`;
