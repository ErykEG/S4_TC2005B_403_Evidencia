import "../Components/Styles/aboutus.css";
import PepelLogo from "../Assets/Images/pepel-logo.png";
import NagarroLogo from "../Assets/Images/nagarro-logo.png";

const About = () => {
  return (
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
          <h3>Mission</h3>
          <p>
            Our mission is to increase the capabilities and efficiency of our
            customers' software by helping them and guiding them in constructing
            innovative ideas about software development.
          </p>
        </div>

        <div className="about-card">
          <h3>Vision</h3>
          <p>
            Our company's vision is to provide consulting and quality software
            on time and in an accessible and economical way.
          </p>
        </div>

        <div className="about-card">
          <h3>Values</h3>
          <p>
            Our values are grounded in integrity above all else, teamwork and
            the human sense. Our work is honest for what we value and we respect
            the responsibility that comes with it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
