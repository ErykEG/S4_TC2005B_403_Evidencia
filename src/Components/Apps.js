import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Profile from "../Pages/profile-page";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/home-page";
import CallbackPage from "../Pages/callback-page";
import NotFoundPage from "../Pages/not-found-page";
import NavBar from "./components/navbar";
import PageLoader from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import AdminPage from "../Pages/admin-page";
import "./Styles/App.css";
import { useEffect, useState } from "react";
import Authpost from "./Authpost.js";

function App() {
  const [data, setData] = useState([]);

  // El fetch retorna una promesa, y convertirlo a .json es otra operación asyncrona.
  // Por esa rason tenemos 2 awaits.

  async function getData() {
    let res = await fetch("https://edbapi.azurewebsites.net/api/stack");
    let dataJson = await res.json();
    setData(dataJson);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Listado de candidatos</h1>
      <div className="center">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          {data.map((res) => (
            <tr>
              <td>{res.Id_Stack}</td>
              <td>{res.Name_Stack}</td>
              <td>{res.Version_Stack}</td>
              <td>{res.Requisite_Stack}</td>
            </tr>
          ))}
        </table>
      </div>

      <Authpost />
    </div>
  );
}

export default App;
