import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Components/Logout";
import "../Components/Styles/profile_page.css";
import { useNavigate, Link } from "react-router-dom";

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
      <div className="profile-card">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <br></br>
        <div id="user-details">
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role(s):</b> {String(userRoles[0])}</p>
          {/* <p className="profile">
            <Link to="/proyects" id="Link">
              {" "}
              My Projects{" "}
            </Link>
          </p> */}
          <p><b>Languages:</b> Spanish, English</p>
        </div>
        <div id="logout-button">
          <Logout />
        </div>
      </div>
    )
  );
}

export default Profile;
