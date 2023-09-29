import { StyledCalculator, Screen, UpperScreen, LowerScreen } from "./styled";
import { Keyboard } from "./Keyboard";

export const Calculator = () => (
  <StyledCalculator>
    <Screen>
      <UpperScreen>1234</UpperScreen>
      <LowerScreen>5678</LowerScreen>
    </Screen>
    <Keyboard />
  </StyledCalculator>
);
