import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const light = {
  mainColorDark: "84, 58, 183",
  mainColorMedium: "31, 172, 223",
  mainColorLight: "0, 172, 193",
  textColor: "#fff",
  wavesColor: "255, 255, 255",
};

const theme = light;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
