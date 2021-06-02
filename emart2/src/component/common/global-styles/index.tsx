import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
*{
  font-family: 'NanumSquare', sans-serif !important;
  font-display: 'block';
  box-sizing: border-box; /* 테두리를 기준으로 박스의 크기를 결정함 */
  -webkit-font-smoothing: antialiased; /* 폰트를 부드럽게 해줌 */
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  font-size: 10px;
  margin: 0;
}::-webkit-scrollbar { /* 스크롤바 제거 */
  display: none;
}

button {
  cursor: pointer;
}

button:focus {
  outline: none;
}

ul {
  list-style-type: none;
  padding:0;
}
`;
export default GlobalStyles;
