import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html{
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }
  
  ul{
    list-style-type: none;
  }
  // Adicione quais mais regras desejar!
`;
