import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export default function Singnup() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>Welcome to the Nagarro Project Management Web App!</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button
        onClick={() =>
          loginWithRedirect({ authorizationParams: { screen_hint: "signup" } })
        }
      >
        Sign Up or Log In Here!
      </Button>
    </div>
  );
}
