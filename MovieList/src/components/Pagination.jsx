import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  position: fixed; // 고정 위치
  bottom: 0; // 하단에 고정
  left: 190px; // 사이드바 너비만큼 여백
  right: 0; // 오른쪽 끝까지
  background-color: #121212; // 배경색 추가
  z-index: 100; // 다른 요소들 위에 표시
`;

const PageButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#e51013" : "transparent")};
  color: ${(props) => (props.active ? "white" : "gray")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.active ? "#e51013" : "#f5f5f5")};
  }
`;

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </PageButton>

      <PageButton active={true}>{currentPage}</PageButton>

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </PageButton>
    </PaginationContainer>
  );
};
