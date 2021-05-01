import React, { useState } from "react";

function StepA() {
  const [sy, setSy] = useState("");
  const [lrn, setLrn] = useState(false);
  const [returning, setReturning] = useState(false);
  const [enrollLevel, setEnrollLevel] = useState("");
  const [lastSchool, setLastSchool] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [lastGradeLevel, setLastGradeLevel] = useState("");
  const [lastSchoolAddress, setLastSchoolAddress] = useState("");
  const [lastSchoolYearCompleted, setLastSchoolYearCompleted] = useState("");
  const [lastSchoolType, setLastSchoolType] = useState("");
  const [semester, setSemester] = useState("");
  const [track, setTrack] = useState("");
  const [strand, setStrand] = useState("");

  return (
    <div>
      <h3>Step A</h3>
    </div>
  );
}

export default StepA;
