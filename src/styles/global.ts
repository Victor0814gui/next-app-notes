import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body{
    margin: 0;
    padding: 0;
    font: 14px Roboto, sans-serif;
  }
  
  ul{
    list-style-type: none;
  }
  // Adicione quais mais regras desejar!
`;