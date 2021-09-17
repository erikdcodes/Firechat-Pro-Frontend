import React from "react";
import ReactDOM from "react-dom";
import "./GlobalStyles/index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
