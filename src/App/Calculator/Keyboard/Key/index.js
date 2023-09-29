import { StyledKey } from "./styled";

export const Key = ({ symbol, action }) => (
  <StyledKey onClick={() => action(symbol)}>{symbol}</StyledKey>
);
