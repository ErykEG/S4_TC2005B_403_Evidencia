import "./Styles/App.css";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "../Pages/profile_page";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/home_page";
import CallbackPage from "../Pages/callback_page";
import NotFoundPage from "../Pages/not_found_page";
import NavBar from "./Nav_Bar";
import PageLoader from "./Page_Loader";
import { AuthenticationGuard } from "./Authentication_Guard";
import AdminPage from "../Pages/admin_page";
import candidates from "../Pages/candidates";
import { useAuth0 } from "@auth0/auth0-react";

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
        <Route
          path="/candidates"
          element={<AuthenticationGuard component={candidates} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
