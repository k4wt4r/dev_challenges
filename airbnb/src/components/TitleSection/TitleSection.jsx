import React from "react";
import * as S from "./TitleSection.style";
import stays from "../../data/stays.json";

function TitleSection({ children }) {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(stays);
  const [searchResultsCount, setSearchResultsCount] = React.useState(
    stays.length
  );

  return (
    <S.StyledContainer>
      <S.StyledTitleAndStaysContainer>
        <S.StyledTitle>{children}</S.StyledTitle>
        <S.StyledStays>12+ stays</S.StyledStays>
      </S.StyledTitleAndStaysContainer>
      <div></div>
    </S.StyledContainer>
  );
}

export default TitleSection;
