import "../Components/Styles/candidates.css";
import { useEffect, useState } from "react";
import M from "./M.js";
import __M__ from "./__M__.js";

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
    <div className="candidates-app">
      {/* <M /> */}
      <__M__/>
    </div>
  );
}

export default Candidates;
