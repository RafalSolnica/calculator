import { StyledKeyboard } from "./styled";
import { Key } from "./Key";

const welcome = (text) => {
  console.log(text);
};

export const Keyboard = () => (
  <StyledKeyboard>
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
  </StyledKeyboard>
);
