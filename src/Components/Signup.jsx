import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Styles/Signup.css";

export default function Singnup() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button
        className="signup-button"
        onClick={() =>
          loginWithRedirect({ authorizationParams: { screen_hint: "signup" } })
        }
        title="Sign Up or Log In Here!"
        accessibilityLabel="Learn more about this purple button"
      >
        Sign Up or Log In Here
      </button>
    </div>
  );
}
