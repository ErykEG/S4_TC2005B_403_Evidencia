import "./App.css";
// Pages
import HomePage from "./Pages/home_page";
import CallbackPage from "./Pages/callback_page";
import NotFoundPage from "./Pages/not_found_page";
import Profile from "./Pages/profile_page";
import AdminPage from "./Pages/admin_page";
import Candidates from "./Pages/candidates";
import Settings from "./Pages/settings.js";

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
      {/* {isAuthenticated && <NavBar />} */}
      {isAuthenticated && <RsideNav />}
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
  );
}

export default App;
