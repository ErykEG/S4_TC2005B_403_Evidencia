import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function RedirectLogin(props) {
  const { logout } = useAuth0();

  setInterval(() => {
    logout({ returnTo: window.location.origin });
  }, 5000);

  return <div>{props.mensaje}</div>;
}

export default RedirectLogin;
