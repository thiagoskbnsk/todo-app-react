import { createGlobalStyle } from "styled-components";
import { defaultValues } from "../constants";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: ${defaultValues.fontDefaultSize}px;
    background: #222831;
    height: 100%;
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
