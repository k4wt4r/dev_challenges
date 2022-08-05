import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => border};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: 600;
  color: #4f4e4e;
`;
