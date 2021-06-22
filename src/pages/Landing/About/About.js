import React from "react";
import "../Landing.css";
import Navbar from "../Navbar";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="aboutUs">
        <h2>About Us</h2>
      </div>

      <div className="definition">
        <h3>
          Davao Oriental Regional Science High School is a specialize public
          learning institution where the curriculum is geared towards
          strengthening the interest of learners in math and science. The values
          of the institution are based on the adage " Scientia et Virtus" which
          means knowledge and courage. Pedagogues utilize immersive school
          projects and activities to inculcate knowledge in the most challenging
          and interactive way. The pursuit of knowledge has never been easy as
          learners must get out of their comfort zone but strategies are used to
          teach them the concepts effectively. Moreover, DORSHS also bring out a
          student's creativity, leadership, communication skills because
          learning does not only take place in the classrooms. website is
          created to introduce the institution to you in a new light as science
          high schools are said to be unnerving and difficult. Well, we believe
          that learning can be fun and yes difficult just like solving jigsaw
          puzzles! The following info are just an overview of who we are and
          what we do.
        </h3>
      </div>
    </div>
  );
}

export default About;
