import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import NagLogo from "../Assets/Images/nagarro-logo.png";
import "../Components/Styles/home_page.css";

function HomePage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <div></div>
        ) : (
          <div>
            <img
              src={process.env.PUBLIC_URL + NagLogo}
              alt="Nagarro logo"
              width="50%"
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
      </header>
    </div>
  );
}

export default HomePage;
