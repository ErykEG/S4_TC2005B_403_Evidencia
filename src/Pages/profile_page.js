import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectLogin from "../Components/Redirect_Login";
import Logout from "../Components/Logout";

function Profile() {
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

  const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
  console.log(`${process.env.REACT_APP_AUTH0_NAMESPACE}`);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Email verified: {String(user.email_verified)} </p>
        <p>Roles: {String(userRoles)}</p>
        <Logout />
      </div>
    )
  );
}

export default Profile;
