import { styled } from "styled-components";

export const StyledKey = styled.div`
  width: 100%;
  aspect-ratio: 1.5/1;
  background-color: ${({ theme }) => theme.color.tundora};
  box-shadow: inset 0px 0px 20px ${({ theme }) => theme.color.darkGrey};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
`;
