import styled from "styled-components";

interface InputProps {
  hasError?: boolean;
}

interface ButtonProps {
  isValid?: boolean;
}

interface SelectProps {
  hasError?: boolean;
}

// 폼 컨테이너
export const FormContainer = styled.div`
  width: 100%;
  min-height: 100vh; // height를 min-height로 변경
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;
// 제목
// export const Title = styled.h1`
//   text-align: center;
//   margin-bottom: 32px;
//   color: white;
//   font-size: 24px;
// `;

// 폼
export const Form = styled.form`
  width: 400px; // 고정된 너비
  padding: 40px;
  background-color: #111; // 배경색 추가
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: auto; // 중앙 정렬을 위한 margin
`;

// 입력 필드 래퍼
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px; // 간격 추가
  min-height: 76px; // height를 min-height로 변경
`;
// 입력 필드
export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.hasError ? "#ff4444" : "#ddd")};
  font-size: 16px;
  background-color: white;
  outline: none;
  color: #000;

  &:focus {
    border-color: ${(props) => (props.hasError ? "#ff4444" : "#666")};
  }

  &::placeholder {
    color: #666;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    background-color: #ddd;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
  }
`;

// 에러 메시지
export const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 12px;
  min-height: 16px; // 에러 메시지 영역 높이 고정
`;

// 제출 버튼
export const SubmitButton = styled.button<ButtonProps>`
  width: 100%;
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

export const Select = styled.select<SelectProps>`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.hasError ? "#ff4444" : "#ddd")};
  font-size: 16px;
  background-color: white;
  outline: none;
  cursor: pointer;
  color: #000;

  &:focus {
    border-color: ${(props) => (props.hasError ? "#ff4444" : "#666")};
  }
`;

// 체크박스 관련 스타일 추가
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 16px 0;
  min-height: 48px; // 체크박스 영역 높이 고정
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 2px; // 체크박스 위치 미세 조정
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: white;
  cursor: pointer;
  flex: 1;
`;
