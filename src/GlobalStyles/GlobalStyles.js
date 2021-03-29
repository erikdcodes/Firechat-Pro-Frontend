import { createGlobalStyle } from "styled-components";
import { styleVariables } from "./StyleVariables.js";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Montserrat", sans-serif;
    line-height: 1.5;
    font-size: ${styleVariables.textSize};
  }

  h1, h2, h3, h4 ,h5, h6 {
    font-weight: 700;
    line-height: 1.25;
  }

  h1 {font-size: ${styleVariables.heading1Size}};
  h2 {font-size: ${styleVariables.heading2Size}};
  h3 {font-size: ${styleVariables.heading3Size}};
  h4, h5, h6 {font-size: ${styleVariables.heading4Size}};

  a {
    text-decoration: none;
    color: ${styleVariables.accentTextColor};
    
    &:hover {
      text-decoration: underline;
    }
  }

`;
