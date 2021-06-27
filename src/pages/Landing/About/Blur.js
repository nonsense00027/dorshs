import React from "react";
import "./About.css";
import rsphoto from "../../../img/Header.png";

function Blur() {
  return (
    <div className="container">
      <div className="blurred__photo">
        <img src={rsphoto} alt="blurred photo" />
      </div>
      <div className="text">
        <h2>Story of DORSHS</h2>
      </div>
      <div className="para">
        <p>Scientia et Virtus</p>
      </div>
    </div>
  );
}

export default Blur;
