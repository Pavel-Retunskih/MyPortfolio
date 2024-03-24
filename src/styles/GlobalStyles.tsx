import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    line-height: 1;
    
}
body{
    background-color: ${Theme.colors.primary.black};
    font-family: "Fira Code";
}
`