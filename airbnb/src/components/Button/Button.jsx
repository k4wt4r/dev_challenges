import React from "react";
import * as S from "./Button.style";

function Button({ children, bgColor, border, width, height, borderRadius }) {
  return (
    <S.StyledContainer>
      <S.StyledButton
        type="button"
        bgColor={bgColor}
        border={border}
        width={width}
        height={height}
        borderRadius={borderRadius}
      >
        {children}
      </S.StyledButton>
    </S.StyledContainer>
  );
}

export default Button;
