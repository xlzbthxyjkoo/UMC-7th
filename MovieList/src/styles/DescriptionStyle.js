import styled from "styled-components";

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
