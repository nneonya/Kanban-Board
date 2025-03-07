import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Plus Jakarta Sans", sans-serif;

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export default GlobalStyles;
