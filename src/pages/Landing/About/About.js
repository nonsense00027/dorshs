import React from "react";
import Blur from "./Blur";
import History from "./History";
import MissViss from "./MissViss";
import Teachers from "./Teachers";
import "./About.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="about__blur">
        <Blur />
      </div>
      <div className="about__history">
        <History />
      </div>
      <div className="about__missviss">
        <MissViss />
      </div>
      <div className="about__teachers">
        <Teachers />
      </div>
      <Footer />
    </div>
  );
}

export default About;
