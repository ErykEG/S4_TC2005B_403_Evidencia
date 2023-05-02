import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectLogin from "../Components/Redirect_Login";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import HomePage from "./homepage";

function CallbackPage() {
  const { user } = useAuth0();
  const [isAssigned, setIsAssigned] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    setIsAssigned(userRoles[0] !== "Unassigned");
  }, [user]);

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

  if (!isAssigned) {
    return (
      <div>"Please ask to be assigned a valid role and refresh the page."</div>
    );
  }

  return (
    <div className="page-layout">
      <div className="page-layout__content">
        <p>hola</p>
      </div>
    </div>
  );
}

export default CallbackPage;
