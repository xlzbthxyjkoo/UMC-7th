import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

// container를 styled.div로 변환
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
`;

// item을 styled.div로 변환
export const Item = styled.div`
  position: relative;
  width: 100%;
  max-width: 110px;
  aspect-ratio: 2 / 3;
  overflow: hidden;
`;

// 포스터 이미지 스타일 적용
export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// overlay 스타일 적용
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  ${Item}:hover & {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
