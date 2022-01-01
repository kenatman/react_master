import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkMode, lightMode } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={darkMode}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
