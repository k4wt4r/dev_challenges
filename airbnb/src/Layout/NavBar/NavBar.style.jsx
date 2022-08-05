import styled from "styled-components";

export const StyledNavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 400px;
  }
`;

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
  color: white;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background-color: azure;
    height: 100%;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 00px;
`;

export const StyledLogo = styled.img`
  width: 74px;
  height: 14px;

  @media (max-width: 768px) {
    width: 300px;
    height: 150px;
  }
`;

export const StyledNavBarItem = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;

    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const StyledSearchIcon = styled.div`
  color: #a43838;
`;
