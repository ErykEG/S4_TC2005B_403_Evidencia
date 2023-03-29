import "./Styles/App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  // El fetch retorna una promesa, y convertirlo a .json es otra operación asyncrona.
  // Por esa rason tenemos 2 awaits.

  async function getData() {
    let res = await fetch("https://edbapi.azurewebsites.net/api/candidates");
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
              <td>{res.Id}</td>
              <td>{res.Name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
