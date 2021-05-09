import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Grade Level And School Information",
    "Student Information",
    "Parent/ Guardian Information",
    "Household Capacity And Access To Distance Learning",
  ];
}

function getStepContent(
  step,
  handleNext,
  handleBack,
  handleStepA,
  handleStepB,
  handleStepC,
  handleStepD
) {
  switch (step) {
    case 0:
      return <StepA handleNext={handleNext} handleStepA={handleStepA} />;
    case 1:
      return (
        <StepB
          handleNext={handleNext}
          handleBack={handleBack}
          handleStepB={handleStepB}
        />
      );
    case 2:
      return (
        <StepC
          handleNext={handleNext}
          handleBack={handleBack}
          handleStepC={handleStepC}
        />
      );
    case 3:
      return (
        <StepD
          handleNext={handleNext}
          handleBack={handleBack}
          handleStepD={handleStepD}
        />
      );
    default:
      return "Unknown step";
  }
}

export default function Steps() {
  const classes = useStyles();
  const [stepa, setStepa] = useState({});
  const [stepb, setStepb] = useState({});
  const [stepc, setStepc] = useState({});
  const [stepd, setStepd] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStepA = (info) => {
    setStepa(info);
  };

  const handleStepB = (info) => {
    setStepb(info);
  };

  const handleStepC = (info) => {
    setStepc(info);
  };

  const handleStepD = (info) => {
    setStepd(info);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography>
              {getStepContent(
                activeStep,
                handleNext,
                handleBack,
                handleStepA,
                handleStepB,
                handleStepC,
                handleStepD
              )}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}
