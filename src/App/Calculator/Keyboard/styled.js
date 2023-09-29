import { styled } from "styled-components";

export const StyledKeyboard = styled.div`
  padding: 20px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.color.mineShaft};
  box-shadow: inset 0px 0px 25px ${({ theme }) => theme.color.darkGrey};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
