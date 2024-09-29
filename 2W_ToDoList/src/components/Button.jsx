import React from "react";

// Button 컴포넌트: 재사용 가능한 버튼 컴포넌트
// props:
// - onClick: 클릭 이벤트 핸들러
// - children: 버튼 내부에 들어갈 텍스트나 요소
// - type: 버튼의 타입 (기본값: "button")
// - className: 추가적인 CSS 클래스 (기본값: "")
const Button = ({ onClick, children, type = "button", className = "" }) => (
  <button className={`btn ${className}`} onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
