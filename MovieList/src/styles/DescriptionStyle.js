import styled, { css } from "styled-components";

export const DetailContainer = styled.div`
  min-height: 100vh;
  color: white;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 40px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PosterSection = styled.div`
  flex-shrink: 0;
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const InfoSection = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const SubInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 1.1rem;

  span {
    padding-right: 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);

    &:last-child {
      border: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    span {
      border-right: none;
    }
  }
`;

export const Overview = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const CreditsSection = styled.div`
  margin-top: 40px;
  position: relative;
`;

export const CreditsTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

export const CastCard = styled.div`
  text-align: center;
`;

export const CastImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const CastName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CharacterName = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const LoadingMessage = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 40px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1.5rem;
  text-align: center;
  padding: 40px;
`;

export const SkeletonPoster = styled.div`
  width: 100%;
  height: 450px;
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
`;

export const SkeletonTitle = styled.div`
  width: 60%;
  height: 36px;
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const SkeletonText = styled.div`
  width: ${(props) => props.width || "100px"};
  height: 20px;
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin: 8px 0;
`;

export const SkeletonOverview = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
  margin: 16px 0;
`;

export const SkeletonCastImage = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
`;

// 애니메이션 keyframes 추가
export const keyframes = css`
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const MoreButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #333;
  margin: 0 auto 10px;
`;
