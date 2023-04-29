import "../Components/Styles/aboutus.css";
import PepelLogo from "../Assets/Images/pepel-logo.png";
import NagarroLogo from "../Assets/Images/nagarro-logo.png";
import React from "react";
import Iframe from "react-iframe";

const About = () => {
  return (
    <div>
      <Iframe
        url="Unity/index.html"
        width="100%"
        height={window.innerHeight + "px"}
        display="initial"
        position="relative"
        overflow-y="hidden"
      />
    </div>
  );
};

export default About;
