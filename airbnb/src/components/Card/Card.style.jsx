import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const StyledCardImage = styled.img`
  width: 480px;
  height: 360px;
  border-radius: 30px;
`;

export const StyledListOfCards = styled.div`
  width: 85%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`;

export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100px;
  padding: 10px;
`;

export const StyledCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 30px;
  color: gray;
`;

export const StyledSuperHost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCardTypeAndbeds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerForRating = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10px;
`;

export const StyledCardType = styled.div`
  font-weight: 300;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 8px;
`;

export const StyledCardBeds = styled.div`
  font-weight: 300;
  font-size: 16px;
  display: flex;
`;
