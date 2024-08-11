import { createGlobalStyle, css } from "styled-components";

const genericStyles = css`
  body {
    margin: 0px;
    background-color: #fff;
    font-family: "Assistant", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
  canvas,
  img {
    overflow: visible !important;
  }
  canvas,
  img {
    overflow-clip-margin: border-box; /* or 'padding-box', 'content-box', or 'initial' */
  }
  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
