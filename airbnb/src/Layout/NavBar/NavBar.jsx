import React from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import * as S from "./NavBar.style";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <S.StyledNavBarContainer>
      <S.StyledNavBar>
        <S.StyledLogoContainer>
          <S.StyledLogo src="logo.png" alt="airbnb" />
        </S.StyledLogoContainer>
        <S.StyledNavBarItem>
          <InputField
            type="text"
            placeholder="Add location"
            inputWidth="100px"
            border="1px solid #c0bcbc"
            inputheight="30px"
          />
          <InputField
            type="text"
            placeholder="Add guests"
            border="1px solid #c0bcbc"
          />
          <Button bgColor="#faf8f8" border="none">
            <FaSearch
              style={{
                color: "#eb5756",
                marginRight: "5px",
              }}
            />
            {/* <span>Search</span> */}
          </Button>
        </S.StyledNavBarItem>
      </S.StyledNavBar>
    </S.StyledNavBarContainer>
  );
}

export default NavBar;
