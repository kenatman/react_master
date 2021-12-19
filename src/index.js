import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

const darkMode = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const whiteMode = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <ThemeProvider theme={darkMode}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
