import React from "react";
import ReactDOM from "react-dom/client";
import "./Components/Styles/index.css";
import App from "./Components/App.jsx";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth0ProviderWithNavigate from "./Components/Auth0_Provider_With_Navigate";
import { BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./Components/Nav_Bar";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
