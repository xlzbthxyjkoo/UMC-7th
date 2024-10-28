import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import * as S from "../styles/DescriptionStyle";

const Description = () => {
  const { movieId } = useParams();

  //영화 세부 정보 데이터
  const {
    data: movieDetails,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
  } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);

  //제작진 정보 데이터
  const {
    data: credits,
    isLoading: isLoadingCredits,
    isError: isErrorCredits,
  } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);

  //로딩
  if (isLoadingDetails || isLoadingCredits) {
    return <S.LoadingMessage>로딩 중입니다...</S.LoadingMessage>;
  }

  //에러
  if (isErrorDetails || isErrorCredits || !movieDetails || !credits) {
    return <S.ErrorMessage>에러가 발생했습니다.</S.ErrorMessage>;
  }

  //분으로 되어있던 러닝타임 데이터를 n시간 nn분으로 표현하기 위한 함수
  const formatRuntime = (minutes) => {
    if (!minutes) return "정보 없음";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}시간 ${remainingMinutes}분`;
  };

  return (
    <S.DetailContainer>
      <S.ContentWrapper>
        <S.PosterSection>
          {movieDetails.poster_path && (
            <S.Poster
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}
        </S.PosterSection>

        <S.InfoSection>
          <S.Title>{movieDetails.title}</S.Title>
          <S.SubInfo>
            <span>
              평점: {movieDetails.vote_average?.toFixed(1) || "평점 없음"}
            </span>
            <span>
              개봉:{" "}
              {movieDetails.release_date
                ? new Date(movieDetails.release_date).getFullYear()
                : "정보 없음"}
            </span>
            <span>러닝타임: {formatRuntime(movieDetails.runtime)}</span>
          </S.SubInfo>
          <S.Overview>
            {movieDetails.overview || "줄거리 정보가 없습니다."}
          </S.Overview>

          <S.CreditsSection>
            <S.CreditsTitle>감독/출연</S.CreditsTitle>
            <S.CastGrid>
              {credits.cast?.slice(0, 10).map((person) => (
                <S.CastCard key={person.id}>
                  {person.profile_path && (
                    <S.CastImage
                      src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                      alt={person.name}
                    />
                  )}
                  <S.CastName>{person.name}</S.CastName>
                  <S.CharacterName>{person.character}</S.CharacterName>
                </S.CastCard>
              ))}
            </S.CastGrid>
          </S.CreditsSection>
        </S.InfoSection>
      </S.ContentWrapper>
    </S.DetailContainer>
  );
};

export default Description;
