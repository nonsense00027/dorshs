import React, { useEffect } from "react";
import "./Landing.css";
import Navbar from "./Navbar";
import MainCarousel from "./MainCarousel";
import Footer from "./Footer";
import LandSec from "./Landing/LandSec";
import Tao from "./Landing/Tao/Tao";
import Medal from "./Landing/Medal/Medal";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN SECTION */}
      <div className="landing__mainCarousel">
        <MainCarousel />
      </div>

      <div className="landing__tao">
        <Tao />
      </div>

      <div className="landing__landSec">
        <LandSec />
      </div>

      <div className="landing__medal">
        <Medal />
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
