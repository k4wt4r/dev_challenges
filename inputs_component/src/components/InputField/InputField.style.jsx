import styled from "styled-components";

export const InputFieldContainer = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  height: ${({ heightContainer }) => heightContainer};
  background-color: ${({ bgColorInput }) => bgColorInput};
`;
