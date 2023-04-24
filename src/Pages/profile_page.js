import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Components/Logout";
import "../Components/Styles/profile_page.css";

function Profile() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div> Loading... </div>;
  }
  console.log(user);

  const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];

  return (
    isAuthenticated && (
      <div>
        <img className="profile" src={user.picture} alt={user.name} />
        <h2 className="profile">{user.name}</h2>
        <br></br>
        <div id="user-details">
          <p className="profile">Email: {user.email}</p>
          <p className="profile">Rol: {String(userRoles)}</p>
          <p className="profile" id="underline">
            {" "}
            My Projects :{" "}
          </p>
          <p className="profile"> Languages : Spanish, English</p>
          <p className="profile"> Seniority: 3</p>
        </div>
        <div id="logout-button">
          <Logout />
        </div>
      </div>
    )
  );
}

export default Profile;
