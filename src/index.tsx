import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import App from "./App";

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
