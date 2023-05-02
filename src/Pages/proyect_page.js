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

function Proyect() {
  const [projects, setRecordset4] = useState([]);

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
  };

  const projects2 = [
    {
      name: "Project 1",
      description: "This is project 1",
      link: "/project1",
    },
    {
      name: "Project 2",
      description: "This is project 2",
      link: "/project2",
    },
    {
      name: "Project 3",
      description: "This is project 3",
      link: "/project3",
    },
  ];

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
                    <p>hola</p>
                    <Link to={project.link}>View project</Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
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
