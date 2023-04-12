import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="primary"
      onClick={() => loginWithRedirect({ appState: { returnTo: "/profile" } })}
    >
      Login
    </Button>
  );
}
