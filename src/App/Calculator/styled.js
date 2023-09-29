import { styled } from "styled-components";

export const StyledCalculator = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 25px;
  background-color: ${({ theme }) => theme.color.mineShaft};
  box-shadow: inset 0px 0px 10px ${({ theme }) => theme.color.darkGrey};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
`;

export const Screen = styled.div`
  padding: 8px;
  text-align: right;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.color.mineShaft};
  box-shadow: inset 0px 0px 10px ${({ theme }) => theme.color.darkGrey};
  border-radius: 15px;
  transition: 0.7s;

  &:hover {
    background-color: ${({ theme }) => theme.color.tundora};
  }
`;

export const UpperScreen = styled.div`
  padding: 10px;
  border-radius: 15px 15px 0px 0px;
  background-color: ${({ theme }) => theme.color.tundora};
  box-shadow: inset 0px 0px 10px ${({ theme }) => theme.color.doveGrey};
  font-size: 1.7rem;
  transition: 0.7s;

  &:hover {
    background-color: ${({ theme }) => theme.color.doveGrey};
  }
`;

export const LowerScreen = styled.div`
  padding: 10px;
  border-radius: 0px 0px 15px 15px;
  background-color: ${({ theme }) => theme.color.emperor};
  font-size: 1.4rem;
  transition: 0.7s;

  &:hover {
    background-color: ${({ theme }) => theme.color.doveGrey};
  }
`;

export const Keyboard = styled.div`
  padding: 20px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.color.mineShaft};
  box-shadow: inset 0px 0px 25px ${({ theme }) => theme.color.darkGrey};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
