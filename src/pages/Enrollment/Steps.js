import React, { useState, useEffect } from "react";
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
import Success from "./Success";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { db } from "../../shared/configs/firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: 120,
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
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
  const [open, setOpen] = useState(false);
  const [idCode, setIdCode] = useState(null);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

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
    handleNext();
  };

  const handleStepB = (info) => {
    setStepb(info);
    handleNext();
  };

  const handleStepC = (info) => {
    setStepc(info);
    handleNext();
  };

  const handleStepD = (info) => {
    setStepd(info);
    setOpen(true);
    db.collection("students")
      .add({
        ...stepa,
        ...stepb,
        ...stepc,
        ...stepd,
        newEnrollee: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => {
        setIdCode({ lrn: stepb.lrnNo, id: result.id });
        setOpen(false);
        handleNext();
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("ENROLLMENT INFO", { ...stepa, ...stepb, ...stepc, ...stepd });

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
            <Success idCode={idCode} />
          </div>
        ) : (
          <div>
            {/* <Typography> */}
            {getStepContent(
              activeStep,
              handleNext,
              handleBack,
              handleStepA,
              handleStepB,
              handleStepC,
              handleStepD
            )}
            {/* </Typography> */}
          </div>
        )}
      </div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
