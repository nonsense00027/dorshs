import React, { useState } from "react";
import ParentGuardianInfo from "./ParentGuardianInfo";

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [fatherEducation, setFatherEducation] = useState({});
  const [motherEducation, setMotherEducation] = useState({});
  const [guardianEducation, setGuardianEducation] = useState({});
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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

  return (
    <div className="stepC">
      <div className="stepC__info">
        <ParentGuardianInfo
          label="Father"
          education={fatherEducation}
          employment={fatherEmployment}
          handleEducationChange={handleFatherEducation}
          handleEmploymentChange={handleFatherEmployment}
        />
        <ParentGuardianInfo
          label="Mother"
          education={motherEducation}
          employment={motherEmployment}
          handleEducationChange={handleMotherEducation}
          handleEmploymentChange={handleMotherEmployment}
        />
        <ParentGuardianInfo
          label="Guardian"
          education={guardianEducation}
          employment={guardianEmployment}
          handleEducationChange={handleGuardianEducation}
          handleEmploymentChange={handleGuardianEmployment}
        />
      </div>
    </div>
  );
}
