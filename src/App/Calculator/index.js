import {
  StyledCalculator,
  Screen,
  UpperScreen,
  LowerScreen,
  Keyboard,
} from "./styled";
import { Key } from "./Key";
import { useState, useEffect } from "react";

const welcome = (text) => {
  console.log(text);
};

export const Calculator = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <StyledCalculator>
      <Screen>
        <UpperScreen>{value}</UpperScreen>
        <LowerScreen>{result}</LowerScreen>
      </Screen>
      <Keyboard>
        <Key symbol="C" action={welcome} />
        <Key symbol="⌫" action={welcome} />
        <Key symbol="pow" action={welcome} />
        <Key symbol="sqrt" action={welcome} />
        <Key symbol="1" action={welcome} />
        <Key symbol="2" action={welcome} />
        <Key symbol="3" action={welcome} />
        <Key symbol="/" action={welcome} />
        <Key symbol="4" action={welcome} />
        <Key symbol="5" action={welcome} />
        <Key symbol="6" action={welcome} />
        <Key symbol="×" action={welcome} />
        <Key symbol="7" action={welcome} />
        <Key symbol="8" action={welcome} />
        <Key symbol="9" action={welcome} />
        <Key symbol="-" action={welcome} />
        <Key symbol="," action={welcome} />
        <Key symbol="0" action={welcome} />
        <Key symbol="=" action={welcome} />
        <Key symbol="+" action={welcome} />
      </Keyboard>
    </StyledCalculator>
  );
};
