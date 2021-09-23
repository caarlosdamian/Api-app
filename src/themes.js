import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
};
export const darkTheme = {
  body: "#1f1717",
  text: "#fff",
  cartText: "#000",
  cardColor: "",
};

export const GlobalStyles = createGlobalStyle`

  body{
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
   
  }
`;
