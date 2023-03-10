import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/index.styled";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
