import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";
import { CLIENT_ID } from "./App";

TagManager.initialize({ gtmId: "G-DYNN0X06V9" });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
