import React from "react";
import ReactDOM from "react-dom";
import "./GlobalStyles/index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
      <GlobalStyles />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
