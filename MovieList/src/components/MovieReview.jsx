import React, { useState, useEffect, useRef } from "react";
import { mockReviews } from "../mocks/reviewData";
import { FaStar } from "react-icons/fa";
import * as S from "../styles/ReviewStyle";
import { LoadingSpinner } from "../styles/ReviewStyle";

const ITEMS_PER_PAGE = 5;

const MovieReview = () => {
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
  const [reviews] = useState(mockReviews);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && reviews.length > displayedItems) {
          setDisplayedItems((prev) =>
            Math.min(prev + ITEMS_PER_PAGE, reviews.length)
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
  }, [reviews.length, displayedItems]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <S.Star key={index} filled={index < rating}>
        <FaStar />
      </S.Star>
    ));
  };

  return (
    <S.ReviewsContainer>
      <S.ReviewHeader>
        <h2>리뷰</h2>
        <S.ReviewCount>{reviews.length}개의 리뷰</S.ReviewCount>
      </S.ReviewHeader>

      <S.ReviewsList>
        {reviews.slice(0, displayedItems).map((review) => (
          <S.ReviewCard key={review.id}>
            <S.UserSection>
              <S.UserImage src={review.userImage} alt={review.userName} />
              <S.UserInfo>
                <S.UserName>{review.userName}</S.UserName>
                <S.RatingContainer>
                  {renderStars(review.rating)}
                </S.RatingContainer>
              </S.UserInfo>
              <S.ReviewDate>{review.createdAt}</S.ReviewDate>
            </S.UserSection>
            <S.ReviewContent>{review.content}</S.ReviewContent>
          </S.ReviewCard>
        ))}
      </S.ReviewsList>

      {reviews.length > displayedItems && (
        <S.LoadingMore ref={observerTarget}>
          <LoadingSpinner />
        </S.LoadingMore>
      )}
    </S.ReviewsContainer>
  );
};

export default MovieReview;
