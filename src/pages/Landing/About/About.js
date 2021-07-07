import React from "react";
import Blur from "./Blur";
import History from "./History";
import MissViss from "./MissViss";
import Teachers from "./Teachers";
import "./About.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Button, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
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
        <Container>
          <h1>Meet The School Heads and Teachers</h1>
          <Teachers />
          <div
            className="about__teachersButton"
            style={{ float: "right", marginTop: 20, marginRight: 20 }}
          >
            <Button onClick={() => history.push("/allteachers")}>
              View all
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default About;
