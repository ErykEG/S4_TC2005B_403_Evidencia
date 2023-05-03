import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import NagLogo from "../Assets/Images/nagarro-logo.png";
import PepLogo from "../Assets/Images/pepel-logo.png";
import "../Components/Styles/InicialPage.css";

function InicialPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="InicialPage">
        {isAuthenticated ? (
          <div></div>
        ) : (
          <div className="InicialPage-content">
            <img
              src={process.env.PUBLIC_URL + NagLogo}
              alt="Nagarro logo"
              id="nagarro-logo-inicial"
            />
            <img
              src={process.env.PUBLIC_URL + PepLogo}
              alt="Pepel logo"
              id="pepel-logo-inicial"
            />
            <br></br>
            <br></br>
            <h1>Welcome to the Nagarro Project Management Web App!</h1>
            <br></br>
            <br></br>
            <Signup />
            <br></br>
            <br></br>
            <br></br>
          </div>
        )}
    </div>
  );
}

export default InicialPage;
