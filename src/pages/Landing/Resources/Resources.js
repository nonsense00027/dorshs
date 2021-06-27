import React from "react";
import Details from "./Details";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Container } from "@material-ui/core";

function Resources() {
  return (
    <div className="resources">
      <Navbar />
      <Container>
        <Details />
      </Container>
      <Footer />
    </div>
  );
}

export default Resources;
