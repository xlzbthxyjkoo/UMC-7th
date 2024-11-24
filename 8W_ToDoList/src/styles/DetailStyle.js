import styled from "styled-components";

export const DetailContainer = styled.div`
  padding: 32px;
  max-width: 800px;
  margin: 20px auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

export const DetailContent = styled.div`
  margin-bottom: 24px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
`;

export const Label = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: #4a90e2;
  font-size: 16px;
`;

export const ContentText = styled.div`
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
`;

export const ContentInput = styled.textarea`
  width: 100%;
  padding: 16px;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  margin-bottom: 20px;
  min-height: 120px;
  font-size: 16px;
  color: #333;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
  justify-content: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e1e1e1;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  label {
    color: #333;
    font-size: 16px;
    user-select: none;
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

  ${(props) => {
    switch (props.variant) {
      case "edit":
        return `
          background: #4A90E2;
          &:hover { background: #357ABD; }
        `;
      case "delete":
        return `
          background: #DC3545;
          &:hover { background: #C82333; }
        `;
      default:
        return `
          background: #6c757d;
          &:hover { background: #5a6268; }
        `;
    }
  }}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
