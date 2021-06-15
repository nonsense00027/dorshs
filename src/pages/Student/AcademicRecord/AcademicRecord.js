import React from "react";
import "./AcademicRecord.css";
import AcademicTable from "./AcademicTable";

function AcademicRecord({ student }) {
  console.log(student.academicRecord);
  // var grades = student.academicRecord.map((item) => item["GRD7"]);
  // console.log(grades);
  return (
    <div>
      <h1>Academic Record</h1>
      <div className="academicRecord__table">
        <AcademicTable subjects={student.academicRecord} />
      </div>
    </div>
  );
}

export default AcademicRecord;
