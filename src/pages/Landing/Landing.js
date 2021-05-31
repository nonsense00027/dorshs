import React from "react";
import "./Landing.css";
import Navbar from "./Navbar";
import MainCarousel from "./MainCarousel";

function Landing() {
  return (
    <div className="landing">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTION */}
      <div className="landing__mainCarousel">
        <MainCarousel />
      </div>
    </div>
  );
}

export default Landing;
