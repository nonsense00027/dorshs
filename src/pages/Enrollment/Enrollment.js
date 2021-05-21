import React, { useState } from "react";
import Steps from "./Steps";
import EnrollmentForm from "./EnrollmentForm";
import Container from "@material-ui/core/Container";
import Navbar from "../Landing/Navbar";

function Enrollment() {
  return (
    <div className="enrollment">
      <Navbar />
      <Container>
        <Steps />
      </Container>
    </div>
  );
}

export default Enrollment;
