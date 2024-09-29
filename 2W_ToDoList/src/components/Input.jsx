import React from "react";

// Input 컴포넌트: 재사용 가능한 입력 필드 컴포넌트
// props:
// - value: 입력 필드의 현재 값
// - onChange: 값 변경 이벤트 핸들러
// - defaultValue: 초기 기본값
// - className: 추가적인 CSS 클래스 (기본값: "")
const Input = ({ value, onChange, defaultValue, className = "" }) => (
  <input
    className={`input ${className}`}
    type="text"
    value={value}
    onChange={onChange}
    defaultValue={defaultValue}
  />
);

export default Input;
