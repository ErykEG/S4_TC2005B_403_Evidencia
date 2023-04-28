import axios from "axios";
import { useEffect, useState } from "react";
import "../Components/Styles/m.css";
import { Dropdown, Button } from "react-bootstrap";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ExportExcel } from "../Components/ExportExcel.jsx";
import ExcelFileUpload from "../Components/ImportExcel.jsx";
import Modal from "react-modal";

function M() {
  const [isAdmin, setIsAdmin] = useState(false);

  const { user } = useAuth0();
  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    setIsAdmin(
      userRoles.includes("Super-Manager") || userRoles.includes("Manager")
    );
  }, [user]);

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
    let res = await fetch("https://edbapi.azurewebsites.net//api/matches/gc");
    let dataJson = await res.json();
    console.log(dataJson);
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
    getData2();
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

  const [modalData, setModalData] = useState({ isOpen: false, id: null });

  const handleOpenModal = (id) => {
    setModalData({ isOpen: true, id: id });
  };

  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  const handleOptionClick = (option) => {
    console.log(`Option ${option} clicked`);
    setNombre(option);
    getData2();
  };

  const handleOptionClick2 = (option) => {
    console.log(`Option ${option} clicked`);
    setNombre2(option);
    getData2();
  };

  const handleOptionClick3 = (option) => {
    console.log(`Option ${option} clicked`);
    setNombre3(option);
  };

  const getData2 = async () => {
    try {
      setVar(nombre);
      const response = await axios.post(
        "https://edbapi.azurewebsites.net//api/matches/q2",
        { variable }
      );
      setRecordset2(response.data);
      console.log(recordset2);
    } catch (error) {
      console.error(error);
    }
  };

  //Search

  const [recordset3, setRecordset3] = useState([]);

  const getData3 = async () => {
    let variable2 = "";
    items.forEach((element) => {
      variable2 = variable2 + " and " + element.value;
    });
    console.log("Log: " + variable2);
    try {
      const response = await axios.post(
        "https://edbapi.azurewebsites.net//api/matches/q1",
        { variable2 }
      );
      setRecordset3(response.data);
    } catch (error) {
      console.error(error);
    }
    getData2();
    getData4();
  };

  const [recordset4, setRecordset4] = useState([]);

  const getData4 = async () => {
    let variable3 = "pp";
    console.log(isAdmin);
    if (isAdmin) {
      variable3 = "%";
    } else {
      variable3 = user.email;
    }
    console.log("Log Num 4: " + variable3);
    try {
      const response = await axios.post(
        "https://edbapi.azurewebsites.net//api/matches/q3",
        { variable3 }
      );
      setRecordset4(response.data);
    } catch (error) {
      console.error(error);
    }
    getData2();
  };

  const [prid, setPrid] = useState("");

  const dropdownStyle = {
    color: "#FFFFFF",
  };

  const submitHandler = () => {
    console.log(typeof modalData.id);
    console.log(typeof prid);

    const expenseData = {
      idCand: modalData.id,
      idProj: prid,
    };

    axios
      .post("https://edbapi.azurewebsites.net//api/matches/q4", expenseData)
      .then(function (response) {
        console.log(response);
        //props.onSaveExpenseData();
      });

    console.log(expenseData);

    handleCloseModal();
  };

  return (
    <div className="m-app">
      <h1>Candidates Page</h1>
      <h3>Rules list</h3>
      <div className="m-dropdowns-buttons">
        <div className="m-dropdowns">
          <Dropdown className="m-down" style={dropdownStyle}>
            <Dropdown.Toggle size="md" variant="secondary" id="dropdown-basic">
              {nombre}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {data.map((res) => {
                return (
                  <>
                    {Object.keys(res).map((property) => (
                      <Dropdown.Item
                        onClick={() => handleOptionClick(res[property])}
                      >
                        {res[property]}
                      </Dropdown.Item>
                    ))}
                  </>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="m-down">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {nombre2}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleOptionClick2("=")}>
                =
              </Dropdown.Item>
              {(nombre === "Id_Candidates" ||
                nombre === "Genus_Ver_Candidates") && (
                <>
                  <Dropdown.Item onClick={() => handleOptionClick2(">")}>
                    &gt;
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleOptionClick2("<")}>
                    &lt;
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleOptionClick2(">=")}>
                    &gt;=
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleOptionClick2("<=")}>
                    &lt;=
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="m-down">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {nombre3}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {recordset2.map((row) => {
                return (
                  <>
                    {Object.keys(row).map((property) => (
                      <Dropdown.Item
                        onClick={() => handleOptionClick3(row[property])}
                      >
                        {row[property]}
                      </Dropdown.Item>
                    ))}
                  </>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            size="xs"
            className="m-addbutton"
            variant="outline-success"
            onClick={() => {
              setConc(nombre + " " + nombre2);
              addItem();
            }}
          >
            Add
          </Button>
        </div>
        <div className="m-buttons">
          <ExportExcel
            dataSource={recordset3}
            fileName={"Export"}
            buttonName={"Export To Excel"}
          />
        </div>
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

      <button className="m-submit-button" onClick={() => getData3()}>
        Submit
      </button>

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
                  <td key={row.Id_Candidates}>
                    {row.Is_Assigned == "UNASSIGNED" && (
                      <button
                        className="add-project"
                        onClick={() => handleOpenModal(row.Id_Candidates)}
                      >
                        Add to Project
                      </button>
                    )}
                    {row.Is_Assigned == "ASSIGNED" && (
                      <button className="project-added">Project Assigned</button>
                    )}
                  </td>
                </tr>
              );
            })}{" "}
          </tbody>{" "}
        </table>{" "}
        <Modal isOpen={modalData.isOpen} style={{ color: "black" }}>
          <div style={{ marginLeft: "5%" }}>
            <h2>Into which project?</h2>
            <h6>Candidate Id: {modalData.id}</h6>
            <h6>Project Id: {prid}</h6>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <table style={{ width: "100%" }}>
                <tbody>
                  {recordset4.map((res) => (
                    <tr>
                      <td style={{ padding: "10px", alignItems: "center" }}>
                        <button
                          onClick={() => setPrid(res.Id_Projects_Short)}
                          style={{ textAlign: "center" }}
                        >
                          {res.Name_Projects_Short}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              style={{
                marginTop: "10%",
                marginLeft: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button onClick={handleCloseModal}>Cancel</button>
              <button onClick={() => submitHandler()}>Continue</button>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
}

export default M;
