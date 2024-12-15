import { useParams, useNavigate } from "react-router-dom";
import { useMovieQueries } from "../hooks/useMovieQueries";
import * as S from "../styles/DescriptionStyle";
import MovieReview from "../components/MovieReview";
import { MovieDetails, Cast, MovieCredits } from "../apis/types";

const Description: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();

  const {
    data: detail,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
  } = useMovieQueries.useMovieDetails(Number(movieId));

  const {
    data: credits,
    isLoading: isLoadingCredits,
    isError: isErrorCredits,
  } = useMovieQueries.useMovieCredits(Number(movieId));

  const renderSkeleton = () => {
    return (
      <S.DetailContainer>
        <S.ContentWrapper>
          <S.PosterSection>
            <S.SkeletonPoster />
          </S.PosterSection>
          <S.InfoSection>
            <S.SkeletonTitle />
            <S.SubInfo>
              <S.SkeletonText width="100px" />
              <S.SkeletonText width="100px" />
              <S.SkeletonText width="100px" />
            </S.SubInfo>
            <S.SkeletonOverview />
            <S.CreditsSection>
              <S.CreditsTitle>감독/출연</S.CreditsTitle>
              <S.CastGrid>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <S.CastCard key={index}>
                      <S.SkeletonCastImage />
                      <S.SkeletonText width="80px" />
                      <S.SkeletonText width="60px" />
                    </S.CastCard>
                  ))}
              </S.CastGrid>
            </S.CreditsSection>
          </S.InfoSection>
        </S.ContentWrapper>
      </S.DetailContainer>
    );
  };

  if (isLoadingDetails || isLoadingCredits) {
    return renderSkeleton();
  }

  if (isErrorDetails || isErrorCredits || !detail || !credits) {
    return <S.ErrorMessage>에러가 발생했습니다.</S.ErrorMessage>;
  }

  const formatRuntime = (minutes: number | undefined): string => {
    if (!minutes) return "정보 없음";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}시간 ${remainingMinutes}분`;
  };

  const movie = detail;
  const castData = credits;

  return (
    <S.DetailContainer>
      <S.ContentWrapper>
        <S.PosterSection>
          {movie.poster_path && (
            <S.Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </S.PosterSection>

        <S.InfoSection>
          <S.Title>{movie.title}</S.Title>
          <S.SubInfo>
            <span>평점: {movie.vote_average?.toFixed(1) || "평점 없음"}</span>
            <span>
              개봉:{" "}
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "정보 없음"}
            </span>
            <span>러닝타임: {formatRuntime(movie.runtime)}</span>
          </S.SubInfo>
          <S.Overview>{movie.overview || "줄거리 정보가 없습니다."}</S.Overview>

          <S.CreditsSection>
            <S.CreditsTitle>감독/출연</S.CreditsTitle>
            <S.MoreButton
              onClick={() => navigate(`/movies/${movieId}/credits`)}
            >
              더보기 ({castData.cast?.length}명)
            </S.MoreButton>
            <S.CastGrid>
              {castData.cast?.slice(0, 10).map((person: Cast) => (
                <S.CastCard key={person.id}>
                  {person.profile_path ? (
                    <S.CastImage
                      src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                      alt={person.name}
                    />
                  ) : (
                    <S.NoProfileImage />
                  )}
                  <S.CastName>{person.name}</S.CastName>
                  <S.CharacterName>{person.character}</S.CharacterName>
                </S.CastCard>
              ))}
            </S.CastGrid>
          </S.CreditsSection>
        </S.InfoSection>
      </S.ContentWrapper>
      <MovieReview />
    </S.DetailContainer>
  );
};

export default Description;
