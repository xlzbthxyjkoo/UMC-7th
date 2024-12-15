import styled from "styled-components";

export const CreditsContainer = styled.div`
  padding: 20px;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    margin-right: 20px;
  }
`;

export const TotalCount = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
`;

export const CreditsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
`;

export const CreditCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const NoProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #333;
  margin: 0 auto 10px;
`;

export const PersonName = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CharacterName = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const LoadingContainer = styled.div`
  color: white;
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
`;

export const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
`;

export const LoadingMore = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
`;

// const LoadingSpinner = styled.div`
//   width: 40px;
//   height: 40px;
//   border: 3px solid rgba(255, 255, 255, 0.3);
//   border-radius: 50%;
//   border-top-color: white;
//   animation: spin 1s linear infinite;

//   @keyframes spin {
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
