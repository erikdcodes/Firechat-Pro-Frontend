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
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENTID}
        redirectUri={window.location.origin}
      >
        <GlobalStyles />
        <App />
      </Auth0Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
