import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
// Pages
import InicialPage from "./Pages/InicialPage";
import CallbackPage from "./Pages/callback_page";
import NotFoundPage from "./Pages/not_found_page";
import Profile from "./Pages/profile_page";
import Candidates from "./Pages/candidates";
import Settings from "./Pages/settings/settings.js";

// Components
import { AuthenticationGuard } from "./Components/Authentication_Guard";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
// import NavBar from "./Components/Nav_Bar";
import PageLoader from "./Components/Page_Loader";
import RsideNav from "./Components/RsideNav";

// Modules
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Proyect from "./Pages/proyect_page.js";
import HomePage from "./Pages/homepage";

function App() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  const [isAssigned, setIsAssigned] = useState(false);

  useEffect(() => {
    let userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    setIsAssigned(userRoles[0] !== "Unassigned");
  }, [user]);

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="all-app">
        <div className="nav-bar">
          {user && user.email_verified && isAssigned && <RsideNav />}
        </div>
        
        <div className="main-content" style={{ minHeight: "100vh" }}>
          <Routes>
            <Route  path="/" element={<InicialPage />} />
            <Route
              path="/home"
              element={<AuthenticationGuard component={HomePage} />}
            />
            <Route
              path="/profile"
              element={<AuthenticationGuard component={Profile} />}
            />
            <Route
              path="/proyects"
              element={<AuthenticationGuard component={Proyect} />}
            />
            <Route
              path="/candidates"
              element={<AuthenticationGuard component={Candidates} />}
            />
            <Route
              path="/settings"
              element={<AuthenticationGuard component={Settings} />}
            />
            <Route path="/callback" element={<CallbackPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
