import React from "react";
import ReactDOM from "react-dom";
import "./GlobalStyles/index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Auth0Provider
        domain="firechat.us.auth0.com"
        clientId="rWpqUmcuyi5SLqYwt9reMWfJYZc5wTCn"
        redirectUri={window.location.origin}
      >
        <GlobalStyles />
        <App />
      </Auth0Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
