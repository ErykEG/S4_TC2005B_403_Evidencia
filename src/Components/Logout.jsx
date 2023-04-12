import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export default function Logout() {
  const { logout } = useAuth0();

  return (
    <Button
      variant="danger"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
}
