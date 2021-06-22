import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, :root{
    max-width: 100vw;
    width: 100%;
    overflow-x: hidden;
  }
  *,input,button,textarea{
    border: none;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background: var(--white-linear);
  }
`;

export default GlobalStyles;
