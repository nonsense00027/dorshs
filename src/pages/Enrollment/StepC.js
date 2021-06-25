import React, { useState, useEffect } from "react";
import ParentGuardianInfo from "./ParentGuardianInfo";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cookie from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  },
}));

export default function StepC({ handleBack, handleStepC }) {
  const classes = useStyles();

  const [fatherEducation, setFatherEducation] = useState({});
  const [fatherLastname, setFatherLastname] = useState("");
  const [fatherFirstname, setFatherFirstname] = useState("");
  const [fatherMiddlename, setFatherMiddlename] = useState("");
  const [fatherWorkingQuarantine, setFatherWorkingQuarantine] = useState(null);
  const [fatherNumber, setFatherNumber] = useState("");

  const [motherEducation, setMotherEducation] = useState({});
  const [motherLastname, setMotherLastname] = useState("");
  const [motherFirstname, setMotherFirstname] = useState("");
  const [motherMiddlename, setMotherMiddlename] = useState("");
  const [motherWorkingQuarantine, setMotherWorkingQuarantine] = useState(null);
  const [motherNumber, setMotherNumber] = useState("");

  const [guardianEducation, setGuardianEducation] = useState({});
  const [guardianLastname, setGuardianLastname] = useState("");
  const [guardianFirstname, setGuardianFirstname] = useState("");
  const [guardianMiddlename, setGuardianMiddlename] = useState("");
  const [guardianWorkingQuarantine, setGuardianWorkingQuarantine] =
    useState(null);
  const [guardianNumber, setGuardianNumber] = useState("");

  const [fatherEmployment, setFatherEmployment] = useState({});
  const [motherEmployment, setMotherEmployment] = useState({});
  const [guardianEmployment, setGuardianEmployment] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleStepC({
      fatherEducation,
      fatherLastname,
      fatherFirstname,
      fatherMiddlename,
      fatherWorkingQuarantine,
      fatherNumber,
      motherEducation,
      motherLastname,
      motherFirstname,
      motherMiddlename,
      motherWorkingQuarantine,
      motherNumber,
      guardianEducation,
      guardianLastname,
      guardianFirstname,
      guardianMiddlename,
      guardianWorkingQuarantine,
      guardianNumber,
      fatherEmployment,
      motherEmployment,
      guardianEmployment,
    });
    putToCookie();
  };

  const handleGoBack = () => {
    putToCookie();
    handleBack();
  };

  const putToCookie = () => {
    Cookie.set(
      "stepc",
      JSON.stringify({
        fatherEducation,
        fatherLastname,
        fatherFirstname,
        fatherMiddlename,
        fatherWorkingQuarantine,
        fatherNumber,
        motherEducation,
        motherLastname,
        motherFirstname,
        motherMiddlename,
        motherWorkingQuarantine,
        motherNumber,
        guardianEducation,
        guardianLastname,
        guardianFirstname,
        guardianMiddlename,
        guardianWorkingQuarantine,
        guardianNumber,
        fatherEmployment,
        motherEmployment,
        guardianEmployment,
      })
    );
  };

  useEffect(() => {
    const stepcCookie = Cookie.getJSON("stepc")
      ? Cookie.getJSON("stepc")
      : null;
    if (stepcCookie) {
      setFatherEducation(stepcCookie.fatherEducation);
      setFatherLastname(stepcCookie.fatherLastname);
      setFatherFirstname(stepcCookie.fatherFirstname);
      setFatherMiddlename(stepcCookie.fatherMiddlename);
      setFatherWorkingQuarantine(stepcCookie.fatherWorkingQuarantine);
      setFatherNumber(stepcCookie.fatherNumber);
      setMotherEducation(stepcCookie.motherEducation);
      setMotherLastname(stepcCookie.motherLastname);
      setMotherFirstname(stepcCookie.motherFirstname);
      setMotherMiddlename(stepcCookie.motherMiddlename);
      setMotherWorkingQuarantine(stepcCookie.motherWorkingQuarantine);
      setMotherNumber(stepcCookie.motherNumber);
      setGuardianEducation(stepcCookie.guardianEducation);
      setGuardianLastname(stepcCookie.guardianLastname);
      setGuardianFirstname(stepcCookie.guardianFirstname);
      setGuardianMiddlename(stepcCookie.guardianMiddlename);
      setGuardianWorkingQuarantine(stepcCookie.guardianWorkingQuarantine);
      setGuardianNumber(stepcCookie.guardianNumber);
      setFatherEmployment(stepcCookie.fatherEmployment);
      setMotherEmployment(stepcCookie.motherEmployment);
      setGuardianEmployment(stepcCookie.guardianEmployment);
    }
  }, []);

  const handleFatherEducation = (event) => {
    setFatherEducation({ name: event.target.name, label: event.target.value });
    console.log("LABEL", event.target.value);
  };

  const handleMotherEducation = (event) => {
    setMotherEducation({ name: event.target.name, label: event.target.value });
  };

  const handleGuardianEducation = (event) => {
    setGuardianEducation({
      name: event.target.name,
      label: event.target.value,
    });
  };

  const handleFatherEmployment = (event) => {
    setFatherEmployment({ name: event.target.name, label: event.target.value });
  };

  const handleMotherEmployment = (event) => {
    setMotherEmployment({ name: event.target.name, label: event.target.value });
  };

  const handleGuardianEmployment = (event) => {
    setGuardianEmployment({
      name: event.target.name,
      label: event.target.value,
    });
  };

  const handleFatherWorkingChange = (event) => {
    setFatherWorkingQuarantine(event.target.value);
  };

  const handleMotherWorkingChange = (event) => {
    setMotherWorkingQuarantine(event.target.value);
  };

  const handleGuardianWorkingChange = (event) => {
    setGuardianWorkingQuarantine(event.target.value);
  };

  return (
    <div className="steps">
      <h3>Parent Guardian Information</h3>
      <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
        <div className="row">
          <ParentGuardianInfo
            label="Father"
            lastname={fatherLastname}
            firstname={fatherFirstname}
            middlename={fatherMiddlename}
            setLastname={setFatherLastname}
            setFirstname={setFatherFirstname}
            setMiddlename={setFatherMiddlename}
            education={fatherEducation}
            employment={fatherEmployment}
            workingQuarantine={fatherWorkingQuarantine}
            handleEducationChange={handleFatherEducation}
            handleEmploymentChange={handleFatherEmployment}
            handleWorkingChange={handleFatherWorkingChange}
            phoneNumber={fatherNumber}
            setNumber={setFatherNumber}
          />
          <ParentGuardianInfo
            label="Mother"
            lastname={motherLastname}
            firstname={motherFirstname}
            middlename={motherMiddlename}
            setLastname={setMotherLastname}
            setFirstname={setMotherFirstname}
            setMiddlename={setMotherMiddlename}
            education={motherEducation}
            employment={motherEmployment}
            workingQuarantine={motherWorkingQuarantine}
            handleEducationChange={handleMotherEducation}
            handleEmploymentChange={handleMotherEmployment}
            handleWorkingChange={handleMotherWorkingChange}
            phoneNumber={motherNumber}
            setNumber={setMotherNumber}
          />
          <ParentGuardianInfo
            label="Guardian"
            lastname={guardianLastname}
            firstname={guardianFirstname}
            middlename={guardianMiddlename}
            setLastname={setGuardianLastname}
            setFirstname={setGuardianFirstname}
            setMiddlename={setGuardianMiddlename}
            education={guardianEducation}
            employment={guardianEmployment}
            workingQuarantine={guardianWorkingQuarantine}
            handleEducationChange={handleGuardianEducation}
            handleEmploymentChange={handleGuardianEmployment}
            handleWorkingChange={handleGuardianWorkingChange}
            phoneNumber={guardianNumber}
            setNumber={setGuardianNumber}
          />
        </div>
        <div className="enrollment__buttonContainer">
          <Button
            variant="contained"
            onClick={handleGoBack}
            className="steps__backButton"
          >
            Back
          </Button>
          <Button
            className="steps__nextButton"
            variant="contained"
            color="primary"
            // onClick={handleSubmit}
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
