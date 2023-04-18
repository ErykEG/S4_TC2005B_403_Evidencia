import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectLogin from "../Components/Redirect_Login";
import Logout from "../Components/Logout";
import "../App.css";
// import { use } from "chai";

function Proyect() {
  const { user } = useAuth0();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    console.log(`URL: ${process.env.REACT_APP_AUTH0_NAMESPACE}`);
    setIsAdmin(userRoles.includes("Super-Manager"));
  }, [user]);

  return <div className="proyect-panel">{isAdmin > <h3>My Proyects</h3>}</div>;
}

export default Proyect;