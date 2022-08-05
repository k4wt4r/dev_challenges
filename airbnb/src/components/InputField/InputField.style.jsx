import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;

  color: bisque;
`;

export const StyledInput = styled.input`
  width: ${({ inputWidth }) => inputWidth};
  height: ${({ inputheight }) => inputheight};
  border: ${({ border }) => border};
`;
