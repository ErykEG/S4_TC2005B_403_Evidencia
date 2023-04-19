import axios from 'axios';
import { useEffect, useState } from "react";
import "./Styles/m.css";
import { Dropdown } from 'react-bootstrap';
import React from 'react';

function M() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [variable, setVar] = useState([""]);

  // El fetch retorna una promesa, y convertirlo a .json es otra operación asyncrona.
  // Por esa rason tenemos 2 awaits.


  const [recordset2, setRecordset2] = useState([]);



  const [conc, setConc] = useState("");
  const [items, setItems] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");
  const [nombre, setNombre] = useState("Column");
  const [nombre2, setNombre2] = useState("Operation");
  const [nombre3, setNombre3] = useState("Value");


  async function getData() {
    let res = await fetch("http://localhost:5001/api/matches/gc");
    let dataJson = await res.json();
    console.log(dataJson)
    setData(dataJson);
  }



  useEffect(() => {
    getData();
    setConc(`${nombre} ${nombre2} '${nombre3}'`);
    getData2();
  }, [nombre, nombre2, nombre3]);





  function addItem() {
    if (!conc) {
      alert("Press enter an item.");
      return;
    }
    console.log("n1 " + nombre);
    console.log("n2 " + nombre2);
    setConc(nombre + " " + nombre2);
    console.log("c " + conc);

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: conc,
    };

    setItems((oldList) => [...oldList, item]);
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editItem(id, newText) {
    const currentItem = items.filter((item) => item.id === id);
    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteItem(id);

    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }

  const handleOptionClick = (option) => {
    console.log(`Option ${option} clicked`);
    setNombre(option);
  };


  const handleOptionClick2 = (option) => {
    console.log(`Option ${option} clicked`);
    setNombre2(option);
  };
  
  const handleOptionClick3 = (option) => {
    console.log(`Option ${option} clicked`);
    setNombre3(option);
  };



  const getData2 = async () => {
    try {
      setVar(nombre);
      const response = await axios.post("http://localhost:5001/api/matches/q2", { variable });
      setRecordset2(response.data);
      console.log(recordset2)
    } catch (error) {
      console.error(error);
    }
  }






  //Search



  const [recordset3, setRecordset3] = useState([]);

  const getData3 = async () => {
    let variable2 = "";
    items.forEach(element => {
      variable2= variable2 + " and " + element.value;
    });
    console.log("Log: " + variable2);
    try {
      const response = await axios.post("http://localhost:5001/api/matches/q1", { variable2 });
      setRecordset3(response.data);
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <div className="app">
      <h1>Lista de Reglas</h1>
      <div className='center'>
      <div className='d-flex'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {nombre}
          </Dropdown.Toggle>

          <Dropdown.Menu>
  {data.map((res) => {
    return (
      <>
        {Object.keys(res).map((property) => (
          <Dropdown.Item onClick={() => handleOptionClick(res[property])}>{res[property]}</Dropdown.Item>
        ))}
      </>
    );
  })}
</Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {nombre2}
          </Dropdown.Toggle>

          <Dropdown.Menu>

          <Dropdown.Item onClick={() => handleOptionClick2("=")}>=</Dropdown.Item>
          {(nombre === 'Id_Candidates' || nombre === 'Genus_Ver_Candidates') && (
            <>
          <Dropdown.Item onClick={() => handleOptionClick2(">")}>&gt;</Dropdown.Item> 
          <Dropdown.Item onClick={() => handleOptionClick2("<")}>&lt;</Dropdown.Item> 
          <Dropdown.Item onClick={() => handleOptionClick2(">=")}>&gt;=</Dropdown.Item> 
          <Dropdown.Item onClick={() => handleOptionClick2("<=")}>&lt;=</Dropdown.Item> 
          </>
          )}

</Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {nombre3}
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {recordset2.map((row) => {
    return (
      <>
        {Object.keys(row).map((property) => (
          <Dropdown.Item onClick={() => handleOptionClick3(row[property])}>{row[property]}</Dropdown.Item>
        ))}
      </>
    );

  })}
</Dropdown.Menu>
        </Dropdown>


      </div>

      <button onClick={() => {setConc(nombre + " " + nombre2); addItem();}}>Add</button>

      </div>

      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>
            </div>
          );
        })}
      </ul>

      <button onClick={()=>getData3()}>Submit</button>

      <>

      <table>
          {" "}
          <tbody>
            {" "}
            {recordset3.map((row) => {
              return (
                <tr key={row.id} className="table-rows">
                  {" "}
                  {Object.keys(row).map((property) => (
                    <td key={property}>{row[property]}</td>
                  ))}{" "}
                </tr>
              );
            })}{" "}
          </tbody>{" "}
        </table>{" "}
    </>

      
    </div>
  );
}

export default M;



