import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import "../../Components/Styles/Settings.css";

import { ExportExcel } from "../../Components/ExportExcel.jsx";
import ExcelFileUpload from "../../Components/ImportExcel.jsx";

import AccountConfig from "./AccountConfig";
import Preferences from "./Preferences";

function Settings() {
  const { user } = useAuth0();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    console.log(`URL: ${process.env.REACT_APP_AUTH0_NAMESPACE}`);
    setIsAdmin(userRoles.includes("Super-Manager"));
  }, [user]);

  const [activeButton, setActiveButton] = useState(null);

  const componentMap = {
    button1: <AccountConfig />,
    button2: <Preferences />,
    // button3: <Component3 />,
    // add more buttons and components as needed
  }

  const handleButtonClick = (buttonName) => () => {
    setActiveButton(buttonName);
  }
  

  return (
    <div className="settings-panel">
      {isAdmin ? (
        <div className="admin-settings">
          <h3>Settings</h3>
          <button onClick={handleButtonClick("button1")}>Configuracion de la cuenta</button>
          <button onClick={handleButtonClick("button2")}>Preferencias del usuario</button>
          <h3 id="adminset">Admin Settings</h3>
          <button>Mis proyectos</button>
          <button>Registro de candidatos</button>
          <button>Registro de proyectos</button>
          <button>Condiguración de reglas y filtros</button>
          <ExcelFileUpload />
          <ExportExcel
            dataSource={"https://edbapi.azurewebsites.net/api/stack"}
            fileName={"Export Stack"}
            buttonName={"Export Stack"}
          />
        </div>
      ) : (
        <div className="normal-settings">
          <h3>Settings</h3>
          <button>Configuracion de la cuenta</button>
          <button>Preferencias del usuario</button>
        </div>
      )}
      <div className="settings-details">
      {/* Rendered when showComponent is true */}
      {activeButton && (
        <div className="component-container">
          {componentMap[activeButton]}
        </div>
      )}
      </div>
    </div>
  );
}

export default Settings;