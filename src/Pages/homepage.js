import "../Components/Styles/homepage.css";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-content">
      <h1>
        <i className="fa fa-fw fa-home" style={{ fontSize: "1.25em" }} /> Home
        Page
      </h1>
      <br></br>

      <div className="card-container">
        <div className="homepagecard">
          <h3>
            <Link to="/profile" className="link">
              <i className="fa fa-fw fa-user" style={{ fontSize: "1.25em" }} />{" "}
              Profile
            </Link>
          </h3>
          <p>Ver detalles del perfil</p>
        </div>

        <div className="homepagecard">
          <h3>
            <Link to="/proyects" className="link">
              <i
                className="fa fa-fw fa-folder"
                style={{ fontSize: "1.25em" }}
              />{" "}
              Proyects
            </Link>
          </h3>
          <p>Los projectos a los que tienes acceso</p>
        </div>

        <div className="homepagecard">
          <h3>
            <Link to="/candidates" className="link">
              <i
                className="fa fa-fw fa-id-card"
                style={{ fontSize: "1.25em" }}
              />{" "}
              Candidates
            </Link>
          </h3>
          <p>Lista de candidatos</p>
        </div>

        <div className="homepagecard">
          <h3>
            <Link to="/settings" className="link">
              <i className="fa fa-fw fa-gear" style={{ fontSize: "1.25em" }} />{" "}
              Settings
            </Link>
          </h3>
          <p>Configuración de la cuenta</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
