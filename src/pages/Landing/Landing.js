import React, { useEffect } from "react";
import "./Landing.css";
import Navbar from "./Navbar";
import MainCarousel from "./MainCarousel";
import Footer from "./Footer";

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

      <Footer />
    </div>
  );
}

export default Landing;
