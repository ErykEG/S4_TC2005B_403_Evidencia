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
        <div className="admin-settings" style={{ height: "100%" }}>
          <h3>Settings</h3>
          <button>Configuracion de la cuenta</button>
          <button>Preferencias del usuario</button>
          <h3 id="adminset">Admin Settings</h3>
          <button>Mis proyectos</button>
          <button>Registro de candidatos</button>
          <button>Registro de proyectos</button>
          <button>Condiguración de reglas y filtros</button>
          <button>Importar bases de datos</button>
          <button>Exportar bases de datos a Excel</button>
        </div>
      ) : (
        <div className="normal-settings" style={{ height: "100%" }}>
          <h3>Settings</h3>
          <button>Configuracion de la cuenta</button>
          <button>Preferencias del usuario</button>
        </div>
      )}
    </div>
  );
}

export default Settings;
