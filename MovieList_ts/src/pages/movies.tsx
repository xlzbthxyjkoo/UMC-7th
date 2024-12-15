import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import * as S from "../styles/CategoryStyle";

interface Category {
  title: string;
  imageUrl: string;
  link: string;
}

const Movies: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCategorySelected, setIsCategorySelected] = useState<boolean>(false);

  useEffect(() => {
    setIsCategorySelected(location.pathname !== "/movies");
  }, [location]);

  const categories: Category[] = [
    {
      title: "현재 상영중인",
      imageUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "now-playing",
    },
    {
      title: "인기있는",
      imageUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "popular",
    },
    {
      title: "높은 평가를 받은",
      imageUrl:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "top-rated",
    },
    {
      title: "개봉 예정작",
      imageUrl:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "up-coming",
    },
  ];

  const handleCategorySelect = (link: string): void => {
    setIsCategorySelected(true);
    navigate(`category/${link}`);
  };

  return (
    <S.PageContainer>
      {!isCategorySelected ? (
        <S.CategoryContainer>
          <S.CategoryTitle>카테고리</S.CategoryTitle>
          <S.CategoryGrid>
            {categories.map((category, index) => (
              <S.CategoryCard
                key={index}
                onClick={() => handleCategorySelect(category.link)}
              >
                <S.CategoryImage src={category.imageUrl} alt={category.title} />
                <S.CategoryOverlay>
                  <S.CategoryCardTitle>{category.title}</S.CategoryCardTitle>
                </S.CategoryOverlay>
              </S.CategoryCard>
            ))}
          </S.CategoryGrid>
        </S.CategoryContainer>
      ) : (
        <S.MovieListContainer>
          <Outlet />
        </S.MovieListContainer>
      )}
    </S.PageContainer>
  );
};

export default Movies;
