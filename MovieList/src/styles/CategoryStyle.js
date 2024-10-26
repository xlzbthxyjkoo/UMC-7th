import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  color: white;
`;

export const CategoryContainer = styled.div`
  padding: 1.5rem;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const CategoryGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: 1rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CategoryCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  flex: 0 0 auto;
  width: 200px;
  height: 112px;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 0.5rem;
`;

export const CategoryCardTitle = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;

export const MovieListContainer = styled.div`
  padding: 1.5rem;
`;
