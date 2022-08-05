import React from "react";
import { AiFillStar } from "react-icons/ai";
import stays from "../../data/stays.json";
import Button from "../Button/Button";
import * as S from "./Card.style";

function CardList() {
  return (
    <S.StyledContainer>
      <S.StyledListOfCards>
        {stays.map((stay, index) => (
          <S.StyledCardContainer key={index}>
            <S.StyledCardImage src={stay.photo} alt="" />
            <S.StyledCardContent>
              <S.StyledCardInfo>
                {stay.superHost && (
                  <S.StyledSuperHost>
                    <Button
                      bgColor="#ffffff"
                      border="1px solid black"
                      width="110px"
                      height="30px"
                      borderRadius="30px"
                    >
                      SUPER HOST
                    </Button>
                  </S.StyledSuperHost>
                )}
                <S.StyledCardTypeAndbeds>
                  <S.StyledCardType>{stay.type}</S.StyledCardType>
                  <S.StyledCardBeds>
                    {" "}
                    {stay.beds === null ? null : <span> {stay.beds} beds</span>}
                  </S.StyledCardBeds>
                </S.StyledCardTypeAndbeds>

                <S.StyledContainerForRating>
                  <AiFillStar
                    style={{
                      color: "#eb5756",
                      marginRight: "4px",
                      marginTop: "1px",
                      fontSize: "18px",
                    }}
                  />
                  {stay.rating}
                </S.StyledContainerForRating>
              </S.StyledCardInfo>
              <S.StyledTitle>{stay.title}</S.StyledTitle>
            </S.StyledCardContent>
          </S.StyledCardContainer>
        ))}
      </S.StyledListOfCards>
    </S.StyledContainer>
  );
}

export default CardList;
