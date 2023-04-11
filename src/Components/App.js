import "./Styles/App.css";
import { useEffect, useState } from "react";
import Authpost from './Authpost.js'; 

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

