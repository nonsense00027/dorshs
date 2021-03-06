import React from "react";
import "./Landing.css";
import Accordion from "./FAQ/Accordion";
import SearchDesign from "../Landing/FAQ/SeachDesign";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FAQ() {
  return (
    <div className="faq">
      <Navbar />

      <div className="searchDesign">
        <SearchDesign />
      </div>

      <div className="accordion">
        <Accordion />
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
