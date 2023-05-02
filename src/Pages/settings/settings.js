import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import "../../Components/Styles/Settings.css";

import { ExportExcel } from "../../Components/ExportExcel.jsx";
import ExcelFileUpload from "../../Components/ImportExcel.jsx";

import AccountConfig from "./AccountConfig";
import Preferences from "./Preferences";
import RegistroCand from "./RegistroCandidatos";
import RegistroProy from "./RegistroProyectos";

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
    button3: <RegistroCand />,
    button4: <RegistroProy />,
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
          <button onClick={handleButtonClick("button1")}>Account Configuration</button>
          <button onClick={handleButtonClick("button2")}>User Preferences</button>
          <h3 id="adminset">Admin Settings</h3>
          <button onClick={handleButtonClick("button3")}>Candidates Registration</button>
          <button onClick={handleButtonClick("button4")}>Proyect Registration</button>
          <ExcelFileUpload />
          
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
