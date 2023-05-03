import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Styles/Proyect.css";
import { NextArrow, PrevArrow } from "../Components/Styles/arrows.js";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

function Proyect() {
  const [projects, setRecordset4] = useState([]);
  const [cand, setRecordset5] = useState([]);

  const { user } = useAuth0();

  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    console.log(`URL: ${process.env.REACT_APP_AUTH0_NAMESPACE}`);
    setIsAdmin(      userRoles.includes("Super-Manager") || userRoles.includes("Manager"));
    callData();
  }, [user]);


  function callData(){
    getData4();
  }


  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow style={{ paddingRight: "20px" }} />, 
    prevArrow: <PrevArrow style={{ paddingLeft: "20px" }} />, 
    centerMode: true, 
    centerPadding: "20%",
 
  };

  const getData4 = async () => {
    let v6 = "pp";
    console.log(isAdmin);
    if (isAdmin) {
      v6 = "%";
    } else {
      v6 = user.email;
    }
    console.log("Log Num 4: " + v6);
    try {
      const response = await axios.post(
        "https://edbapi.azurewebsites.net//api/matches/q6",
        { v6 }
      );
      setRecordset4(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const [modalData, setModalData] = useState({ isOpen: false, id: null });
  const [varseven, setVS] = useState(0);
  const handleOpenModal = async (id) => {
    console.log(id);
    setVS(id);
    getData5(id);
    setModalData({ isOpen: true, id: id });
  };


  const handleCloseModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  function delCand(){
    const expenseData = {
      idCand: candData.id,
    };
    axios
    .post("https://edbapi.azurewebsites.net//api/matches/q8", expenseData)
    .then(function (response) {
      console.log(response);
      //props.onSaveExpenseData();
    });
    handleCloseModal();
  }

  const getData5 = async (id) => {
    let v7 = id.toString();
    try {
      const response = await axios.post(
        "https://edbapi.azurewebsites.net//api/matches/q7",
        { v7 }
      );
      setRecordset5(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const [candData, setCD] = useState({ id: null, name: "" });
  function borrarCand(id, name){
    setCD({ id: id, name: name });
  }

  return (
    <div className="proyect-panel">
      {isAdmin ? (
        <div>
          <h1 className="project-title">My Projects</h1>
          <div className="carousel-box">
            <Slider {...carouselSettings}>
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="project-card">
                    <h3>{project.Name_Projects_Short}</h3>
                    <p>{project.Job_Description}</p>
                    <button
                        className="add-project"
                        onClick={() => handleOpenModal(project.Id_Projects_Short)}
                      >
                        View Candidates
                      </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <Modal isOpen={modalData.isOpen} style={{ color: "black" }}>
          <div style={{ marginLeft: "5%" }}>
            <h2>Hola</h2>
            <h6>Project Id: {modalData.id}</h6>
            <div style={{ maxHeight: "300px", overflowY: "auto" }}>
              <table style={{ width: "100%" }}>
                <tbody>
                {cand.map((res) => (
                    <tr>
                      <td style={{ padding: "10px", alignItems: "center" }}>
                        <button
                          onClick={() => borrarCand(res.Id_Candidates, res.Name_Candidates)}
                          style={{ textAlign: "center" }}
                        >
                          {res.Name_Candidates}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h6>Candidate Selected: {candData.name}</h6>
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
              <button onClick={()=>delCand()}>Delete</button>
            </div>
          </div>
        </Modal>
        </div>
      ) : (
        <div className="normal-settings" style={{ height: "100%" }}>
          <h3>Settings</h3>
          <button>Configuracion de la cuenta</button>
          <button>Preferencias del usuario</button>
        </div>
      )}
    </div>
  );
}

export default Proyect;
