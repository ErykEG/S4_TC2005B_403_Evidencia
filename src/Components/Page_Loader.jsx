import React from "react";
import "./Styles/Page_Loader.css";
import Image from "../Assets/Images/loadingImg.png";

function PageLoader() {
  return (
    <div className="loaderBackground" style={{minHeight: "100vh"}}>
      <div className="loaderImage">
        <img
          id="loaderImage"
          src={process.env.PUBLIC_URL + Image}
          alt="Nagarro logo"
          width="50%"
        />
      </div>
    </div>
  );
}

export default PageLoader;
 