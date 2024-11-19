import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: white;
    font-family: Arial, sans-serif;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem;
  min-height: calc(100vh - 140px); // 페이지네이션을 위한 여백 확보
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px; // 페이지네이션을 위한 하단 여백
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 8px;
  transition: background-color 0.3s ease;

  ${PosterContainer}:hover & {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const MovieInfo = styled.div`
  text-align: left;
`;

export const MovieTitle = styled.h3`
  font-size: 0.8rem;
  color: white;
  margin: 0 0 4px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const MovieReleaseDate = styled.p`
  font-size: 0.7rem;
  color: #aaa;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

// 스켈레톤 UI 애니메이션
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonPoster = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`;

export const SkeletonText = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 20px;
  background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;
