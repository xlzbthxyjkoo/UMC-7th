import styled from "styled-components";

export const SearchPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #121212;
  min-height: calc(100vh - 60px); // Navbar 높이 만큼 빼기
`;

export const SearchContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 0 2rem 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: white;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #e51013;
  }

  &::placeholder {
    color: #666;
  }
`;

export const ResultsContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EmptyStateMessage = styled.div`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  margin-top: 4rem;
`;

export const NoResultsMessage = styled(EmptyStateMessage)``;

export const ErrorMessage = styled(EmptyStateMessage)`
  color: #e51013;
`;
