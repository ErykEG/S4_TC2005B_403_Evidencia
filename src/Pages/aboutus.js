import "../Components/Styles/aboutus.css";
import PepelLogo from "../Assets/Images/pepel-logo.png";
import NagarroLogo from "../Assets/Images/nagarro-logo.png";

const About = () => {
    return(
        <div className="about-app">
            <h1>About Us</h1>
            <div className="row-logo">
                <div>
                    <img
                    className="about-app-logo"
                    src={process.env.PUBLIC_URL + PepelLogo}
                    alt="Pepel logo"
                    />
                </div>

                <div>
                    <i id="about-app-icon" className="fa-solid fa-plus"></i>
                </div>

                <div>
                    <img
                    className="about-app-logo"
                    src={process.env.PUBLIC_URL + NagarroLogo}
                    alt="Nagarro logo"
                    />
                </div>
            </div>
            <div className="about-flexbox">
                <div className="about-card">
                    <h3>Mision</h3>
                    <p>Nuestra misión consiste en incrementar las capacidades
                    y eficiencia del software de nuestros clientes al ayudarlos 
                    y guiarlos en el desarrollo de ideas innovadoras sobre la 
                    construcción de software. </p>
                </div>
                
                <div className="about-card">
                    <h3>Visión</h3>
                    <p>La visión de nuestra empresa es proporcionar consejería 
                    y software de calidad en tiempo y de forma accesible y económica. 
                    </p>
                </div>
                
                <div className="about-card">
                    <h3>Valores</h3>
                    <p>Nosotros creemos en la integridad ante todo, el trabajo en 
                    equipo y el sentido humano. Nuestro trabajo es honesto por 
                    lo que valoramos y respetamos la responsabilidad que viene con ello. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;