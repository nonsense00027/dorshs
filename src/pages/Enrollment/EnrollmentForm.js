import React, { useState } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";

function EnrollmentForm() {
  return (
    <div>
      <StepA />
      <StepB />
      <StepC />
      <StepD />
    </div>
  );
}

export default EnrollmentForm;
