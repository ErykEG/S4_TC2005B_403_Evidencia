import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Components/login";
import Signup from "../Components/Signup";

function HomePage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <div></div>
        ) : (
          <div>
            <Login />
            <Signup />
          </div>
        )}
      </header>
    </div>
  );
}

export default HomePage;
