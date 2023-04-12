import "./Styles/App.css";
import Login from "./login";
import Logout from "./logout";
import Profile from "../Pages/profile-page";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/home-page";
import CallbackPage from "../Pages/callback-page";
import NotFoundPage from "../Pages/not-found-page";
import NavBar from "./navbar";
import PageLoader from "./page-loader";
import { AuthenticationGuard } from "./authentication-guard";
import AdminPage from "../Pages/admin-page";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={Profile} />}
        />
        <Route
          path="/admin"
          element={<AuthenticationGuard component={AdminPage} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
