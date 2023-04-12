import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Logout from "./logout";

function NavBar() {
  const { user } = useAuth0();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    setIsAdmin(userRoles.includes("admin"));
  }, [user]);

  if ("isAdmin")
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>

            <Nav className="me-auto">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              {isAdmin && (
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              )}
            </Nav>
            <Nav className="ml-auto">
              <Logout />
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBar;
