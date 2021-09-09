import React from "react";
import ReactDOM from "react-dom";
import "./GlobalStyles/index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0/Auth0ProviderWithHistory";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <Auth0ProviderWithHistory>
          <GlobalStyles />
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
