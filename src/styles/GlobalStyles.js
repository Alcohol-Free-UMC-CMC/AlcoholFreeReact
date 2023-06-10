import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import '../assets/fonts/fonts.css'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: black;
    font-family: "Pretendard-Regular", sans-serif
  }
  
  body {
    max-width: 500px;
    font-family: "Pretendard-Regular", sans-serif
  }
  
  a {
    text-decoration: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }
`;
