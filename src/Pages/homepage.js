import "../Components/Styles/homepage.css";

const HomePage = () => {
  return (
    <div>
        <h1><i className="fa fa-fw fa-home" style={{ fontSize: '1.25em' }} /> Home Page</h1>
        <br></br>

        <div className="card-container">
            <div className="homepagecard">
                <h3><i className="fa fa-fw fa-user" style={{ fontSize: '1.25em' }} /> Profile</h3>
                <p>Ver detalles del perfil</p>
            </div>
            <div className="homepagecard">
                <h3><i className="fa fa-fw fa-folder" style={{ fontSize: '1.25em' }} /> Proyects</h3>
                <p>Los projectos a los que tienes acceso</p>
            </div>
            <div className="homepagecard">
                <h3><i className="fa fa-fw fa-id-card" style={{ fontSize: '1.25em' }} /> Candidates</h3>
                <p>Lista de candidatos</p>
            </div>
            <div className="homepagecard">
                <h3><i className="fa fa-fw fa-gear" style={{ fontSize: '1.25em' }} /> Settings</h3>
                <p>Configuración de la cuenta</p>
            </div>
        </div>
    </div>
  );
}

export default HomePage;