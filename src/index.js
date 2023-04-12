import React from "react";
import ReactDOM from "react-dom/client";
import "./Components/Styles/index.css";
import App from "./Components/App.jsx";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth0ProviderWithNavigate from "./Components/Auth0_Provider_With_Navigate";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Nav_Bar";
import { useAuth0 } from "@auth0/auth0-react";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
