import styled from "styled-components";

interface PageButtonProps {
  active?: boolean;
  disabled?: boolean;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  left: 190px;
  right: 0;
  background-color: #121212;
  z-index: 100;
`;

const PageButton = styled.button<PageButtonProps>`
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

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
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
