import React from "react";
import "./ReadMore.css";
import rsphoto from "../../../img/Header.png";
import logo from "../../../img/logo.svg";

function Blurred() {
  return (
    <div className="blurred">
      <div className="blurred__photo">
        <img src={rsphoto} alt="blurred photo" />
        <div className="blurred__info">
          <img src={logo} alt="logo" />
          <h1>Davao Oriental Regional Science High School</h1>
        </div>
      </div>
      {/* <div className="blurred__logo">
      </div>
      <div className="blurred__text">
        <h2>Davao Oriental Regional Science High School</h2>
      </div> */}
    </div>
  );
}

export default Blurred;
