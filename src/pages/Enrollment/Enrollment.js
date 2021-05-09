import React, { useState } from "react";
import Steps from "./Steps";
import Container from "@material-ui/core/Container";

function Enrollment() {
  return (
    <div className="enrollment">
      <Container>
        <Steps />
      </Container>
    </div>
  );
}

export default Enrollment;
