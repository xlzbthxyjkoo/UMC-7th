import styled, { keyframes } from "styled-components";

interface StarProps {
  filled: boolean;
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ReviewsContainer = styled.div`
  padding: 20px;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 1.8rem;
    margin-right: 15px;
  }
`;

export const ReviewCount = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const UserName = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const Star = styled.span<StarProps>`
  color: ${(props) => (props.filled ? "#ffd700" : "#555")};
`;

export const ReviewDate = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

export const ReviewContent = styled.p`
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
`;

export const LoadingMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
`;

export const LoadingSpinner = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s linear infinite;
`;
