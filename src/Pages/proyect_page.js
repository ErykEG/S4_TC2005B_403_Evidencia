import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Styles/Proyect.css";
import { NextArrow, PrevArrow } from "../Components/Styles/arrows.js";
import { useNavigate, Link } from "react-router-dom";

function Proyect() {
  const { user } = useAuth0();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userRoles = user?.[`${process.env.REACT_APP_AUTH0_NAMESPACE}`] ?? [];
    console.log(`URL: ${process.env.REACT_APP_AUTH0_NAMESPACE}`);
    setIsAdmin(userRoles.includes("Super-Manager"));
  }, [user]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="settings-panel">
      {isAdmin ? (
        <div className="admin-settings" style={{ height: "100%" }}>
          <h3>Project Page</h3>
          <Link to="/profile" className="link">
            Configuración de la cuenta
          </Link>
          <button>Preferencias del usuario</button>
          <button>Importar base de Datos</button>
          <div className="carousel-box">
            <Slider {...carouselSettings}>
              <div>
                <img src="https://via.placeholder.com/500x200" alt="slide 1" />
              </div>
              <div>
                <img src="https://via.placeholder.com/500x200" alt="slide 2" />
              </div>
              <div>
                <img src="https://via.placeholder.com/500x200" alt="slide 3" />
              </div>
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
