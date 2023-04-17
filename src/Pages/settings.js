import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import "../Components/Styles/Settings.css";

function Settings() {
  const { user } = useAuth0();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    console.log(`URL: ${process.env.REACT_APP_AUTH0_NAMESPACE}`);
    setIsAdmin(userRoles.includes("Super-Manager"));
  }, [user]);

  return (
    <div className="settings-panel">
      {isAdmin ? (
        <div className="admin-settings" style={{ height: "100vh" }}>
          <h3>Settings</h3>
          <p>Configuracion de la cuenta</p>
          <p>Preferencias del usuario</p>
          <h3 id="adminset">Admin Settings</h3>
          <p>Mis proyectos</p>
          <p>Registro de candidatos</p>
          <p>Registro de proyectos</p>
          <p>Condiguración de reglas y filtros</p>
          <p>Importar bases de datos</p>
          <button>Export Database to Excel</button>
        </div>
      ) : (
        <div className="normal-settings" style={{ height: "100vh" }}>
          <h3>Settings</h3>
          <p>Configuracion de la cuenta</p>
          <p>Preferencias del usuario</p>
        </div>
      )}
    </div>
  );
}

export default Settings;
