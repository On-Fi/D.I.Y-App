import { createGlobalStyle } from "styled-components";
import { Comfortaa} from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

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
    font-family: ${comfortaa.style.fontFamily}; 
    
  }
`;
