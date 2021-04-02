import { createGlobalStyle } from "styled-components";
import { styleVariables } from "./StyleVariables.js";
import { darken } from "polished";

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

  input[type=text] {
    padding: ${styleVariables.padding};
    width: 100%;
    color: ${styleVariables.primaryTextColor};
    margin-bottom: ${styleVariables.padding};
    border-style:solid;
    border:2px solid ${styleVariables.bgColor1};
    box-shadow: none;
    border-radius: 4px;

  }

  ::placeholder {
      font-size: ${styleVariables.smallerTextSize};
      font-style: italic;
    }

  button {
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 5px;
    outline: none;

    &:focus {
      outline: none;
    }



    &.blue {
      color: #fff;
      background:${styleVariables.accentColorBlue};
      &:hover {
        background: ${darken(0.1, styleVariables.accentColorBlue)};
      }

    }

    &.green {
      color: #fff;
      background:${styleVariables.accentColorGreen};
      &:hover {
        background: ${darken(0.1, styleVariables.accentColorGreen)};
      }
    }

    &.orange {
      color: #fff;
      background:${styleVariables.accentColorOrange};
      &:hover {
        background: ${darken(0.1, styleVariables.accentColorOrange)};
      }
    }

    &.pink {
      color: #fff;
      background:${styleVariables.accentColorPink};
      &:hover {
        background: ${darken(0.1, styleVariables.accentColorOrange)};
      }
    }

    &.link {
    border: none;
    background-color: transparent;
    margin: 0 5px;
    padding: 10px 0;
    
      &:hover {
        color: ${styleVariables.accentColorBlue};
      }
    }
  }

// custom scroll/track bar
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${styleVariables.bgColor1};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${darken(0.1, styleVariables.bgColor1)};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${darken(0.2, styleVariables.bgColor1)};
}
`;
