import React, { useState } from "react";
import ParentGuardianInfo from "./ParentGuardianInfo";

export default function StepC() {
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
  const [guardianWorkingQuarantine, setGuardianWorkingQuarantine] = useState(
    null
  );
  const [guardianNumber, setGuardianNumber] = useState("");

  const [fatherEmployment, setFatherEmployment] = useState({});
  const [motherEmployment, setMotherEmployment] = useState({});
  const [guardianEmployment, setGuardianEmployment] = useState({});

  const [state, setState] = React.useState({
    elementary: false,
    highschool: false,
    college: false,
    vocational: false,
    master: false,
    dnas: false,
    others: false,
  });

  const handleFatherEducation = (event) => {
    setFatherEducation({ name: event.target.name, label: event.target.label });
  };

  const handleMotherEducation = (event) => {
    setMotherEducation({ name: event.target.name, label: event.target.label });
  };

  const handleGuardianEducation = (event) => {
    setGuardianEducation({
      name: event.target.name,
      label: event.target.label,
    });
  };

  const handleFatherEmployment = (event) => {
    setFatherEmployment({ name: event.target.name, label: event.target.label });
  };

  const handleMotherEmployment = (event) => {
    setMotherEmployment({ name: event.target.name, label: event.target.label });
  };

  const handleGuardianEmployment = (event) => {
    setGuardianEmployment({
      name: event.target.name,
      label: event.target.label,
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
    <div className="stepC">
      <div className="stepC__info">
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
    </div>
  );
}
