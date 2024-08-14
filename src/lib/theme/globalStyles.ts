import { createGlobalStyle } from "styled-components";
import { fonts, getFont, getFontSizes } from "@lib/theme/fonts";

export const GlobalStyles = createGlobalStyle`
  ${fonts.map((f) => getFont(f, "/fonts/"))}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #eeeeee;
    font-family: "panton", sans-serif;
    ${getFontSizes("default")}
  }

  h1 {
    ${getFontSizes("header")}
  }

  h2 {
    ${getFontSizes("subheader")}
  }
  
  h3 {
    ${getFontSizes("title")}
    letter-spacing: -0.02em;
  }

  body, p, h1, h2, h3 {
    margin: 0;
  }
`;
