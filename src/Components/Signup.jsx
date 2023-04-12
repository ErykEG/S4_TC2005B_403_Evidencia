import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export default function Singnup() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="warning"
      onClick={() =>
        loginWithRedirect({ authorizationParams: { screen_hint: "signup" } })
      }
    >
      Signup
    </Button>
  );
}
