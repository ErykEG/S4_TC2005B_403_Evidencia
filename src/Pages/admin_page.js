import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

function AdminPage() {
  const { user } = useAuth0();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    console.log(`URL: ${process.env.REACT_APP_AUTH0_NAMESPACE}`);
    setIsAdmin(userRoles.includes("admin"));
  }, [user]);

  return (
    <div>
      {isAdmin ? (
        <h3>Welcome, admin!</h3>
      ) : (
        <h3>Sorry, you are not authorized to view this page.</h3>
      )}
    </div>
  );
}

export default AdminPage;
