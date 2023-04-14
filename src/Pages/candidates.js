import "../Components/Styles/settings.css";
import { useEffect, useState } from "react";

function Candidates() {
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
      <h1>Candidates List</h1>{" "}
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

export default Candidates;
