import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face{
  font-family: NanumSquare;
  font-style: normal;
  font-display: 'block';
}

html{
  font-size: 12px;
}


body {
  margin: 0;
}

button {
  cursor: point;
}

ul {
  list-style-type: none;
  padding:0;
}
`;
export default GlobalStyles;
