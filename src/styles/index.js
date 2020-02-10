import { createGlobalStyle } from "styled-components";
import { defaultValues } from "../constants";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: ${defaultValues.fontDefaultSize}px;
    background: #f1f1f1;
    height: 100%;
  }
`;

export default GlobalStyle;
