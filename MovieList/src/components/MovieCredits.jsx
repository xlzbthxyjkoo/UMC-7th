import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieQueries } from "../hooks/useMovieQueries";
import * as S from "../styles/MovieCreditsStyle";
import LoadingSpinner from "./LoadingSpinner";

const ITEMS_PER_PAGE = 10;

const MovieCredits = () => {
  const { movieId } = useParams();
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
  const observerTarget = useRef(null);
  const {
    data: credits,
    isLoading,
    isError,
  } = useMovieQueries.useMovieCredits(movieId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          credits?.cast?.length > displayedItems
        ) {
          setDisplayedItems((prev) =>
            Math.min(prev + ITEMS_PER_PAGE, credits.cast.length)
          );
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [credits?.cast?.length, displayedItems]);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <S.ErrorContainer>에러가 발생했습니다.</S.ErrorContainer>;

  return (
    <S.CreditsContainer>
      <S.HeaderSection>
        <h1>출연/제작</h1>
        <S.TotalCount>전체 {credits?.cast?.length || 0}명</S.TotalCount>
      </S.HeaderSection>
      <S.CreditsGrid>
        {credits?.cast?.slice(0, displayedItems).map((person) => (
          <S.CreditCard key={person.id}>
            {person.profile_path ? (
              <S.ProfileImage
                src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                alt={person.name}
              />
            ) : (
              <S.NoProfileImage />
            )}
            <S.PersonName>{person.name}</S.PersonName>
            <S.CharacterName>{person.character}</S.CharacterName>
          </S.CreditCard>
        ))}
      </S.CreditsGrid>
      {credits?.cast?.length > displayedItems && (
        <S.LoadingMore ref={observerTarget}>
          <LoadingSpinner />
        </S.LoadingMore>
      )}
    </S.CreditsContainer>
  );
};

export default MovieCredits;
