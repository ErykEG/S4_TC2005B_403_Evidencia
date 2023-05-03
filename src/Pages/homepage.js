import "../Components/Styles/homepage.css";
import { Link } from "react-router-dom";
import LicenciaDeUso from "../Components/LicenciaDeUso.jsx";

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
            <Link to="/profile" className="homepagecard-titles">
              <i className="fa fa-fw fa-user" style={{ fontSize: "1.25em" }} />{" "}
              Profile
            </Link>
          </h3>
          <p>See Profile Details</p>
        </div>

        <div className="homepagecard">
          <h3>
            <Link to="/proyects" className="homepagecard-titles">
              <i
                className="fa fa-fw fa-folder"
                style={{ fontSize: "1.25em" }}
              />{" "}
              Proyects
            </Link>
          </h3>
          <p>Projects with Access</p>
        </div>

        <div className="homepagecard">
          <h3>
            <Link to="/candidates" className="homepagecard-titles">
              <i
                className="fa fa-fw fa-id-card"
                style={{ fontSize: "1.25em" }}
              />{" "}
              Candidates
            </Link>
          </h3>
          <p>Candidate List</p>
        </div>

        <div className="homepagecard">
          <h3>
            <Link to="/settings" className="homepagecard-titles">
              <i className="fa fa-fw fa-gear" style={{ fontSize: "1.25em" }} />{" "}
              Settings
            </Link>
          </h3>
          <p>Account Configuration</p>
        </div>
      </div>
      
      <div className="licencia-de-uso">
        <h4>
            <Link to="/LicenciaDeUso" className="homepagecard-titles">
              {" "}
              Licencia de uso de Software
            </Link>
        </h4>
      </div>
  </div>
  );
};

export default HomePage;
