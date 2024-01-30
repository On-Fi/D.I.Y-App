import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
   padding-bottom:30px;

    width: 100%;
    overflow: auto;
    overscroll-behavior: none;
   
  }
  body {
    margin: 0;
    font-family: 'gill sans', sans-serif;
    
  }
`;
