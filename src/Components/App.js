import "./Styles/App.css";
import "./Styles/App.css";
import { useEffect, useState } from "react";

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
      <h1>Listado de candidatos</h1>{" "}
      <div className="center">
        {" "}
        <table>
          {" "}
          <tbody>
            {" "}
            {data.map((res) => {
              return (
                <tr key={res.id}>
                  {" "}
                  {Object.keys(res).map((property) => (
                    <td key={property}>{res[property]}</td>
                  ))}{" "}
                </tr>
              );
            })}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
