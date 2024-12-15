import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import Grid from "../components/Grid";
import * as S from "../styles/SearchStyle";
import debounce from "lodash/debounce";

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("query") || ""
  );

  const debouncedSetSearchParams = useCallback(
    debounce((term: string) => {
      if (term) {
        setSearchParams({ query: term });
      } else {
        setSearchParams({});
      }
    }, 500),
    [setSearchParams]
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSetSearchParams(value);
  };

  return (
    <S.SearchPageContainer>
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="영화 제목을 입력해주세요..."
        />
      </S.SearchContainer>
      {!searchTerm ? (
        <S.EmptyStateMessage>영화 제목을 검색해주세요</S.EmptyStateMessage>
      ) : (
        <Grid searchQuery={searchTerm} />
      )}
    </S.SearchPageContainer>
  );
};

export default SearchPage;
