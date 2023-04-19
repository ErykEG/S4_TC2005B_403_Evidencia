import React from "react";
import NavBar from "../Components/Nav_Bar";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectLogin from "../Components/Redirect_Login";
import { useState, useEffect } from "react";

function CallbackPage() {
  const { user } = useAuth0();
  const [isAssigned, setIsAssigned] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    setIsAssigned(userRoles[1] !== undefined);
  }, [user, isAssigned]);

  if (user && !user.email_verified) {
    return (
      <div>
        <RedirectLogin
          mensaje="Please confirm your email before login. Redirecting to main page in 5
    seconds..."
        />
      </div>
    );
  } else if (user && !isAssigned) {
    return (
      <div>
        <RedirectLogin
          mensaje="Please ask to be assigned a valid role. Redirecting to main page in 5
          seconds..."
        />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <div className="page-layout__content">
        <p>Yipee</p>
      </div>
    </div>
  );
}

export default CallbackPage;
