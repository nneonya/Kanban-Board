import React from "react";
import Board from "./components/Board/index";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Board />
    </ThemeProvider>
  );
};

export default App;
