import React from "react";
import NavBar from "../Components/Nav_Bar";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectLogin from "../Components/Redirect_Login";

function CallbackPage() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div> Loading... </div>;
  }
  console.log(user);

  if (user && !user.email_verified) {
    return (
      <div>
        <RedirectLogin
          mensaje="Please confirm your email before login. Redirecting to main page in 5
    seconds..."
        />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <div className="page-layout__content" />
    </div>
  );
}

export default CallbackPage;
