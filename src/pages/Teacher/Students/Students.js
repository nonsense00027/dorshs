import React from "react";
import "./Students.css";
import StudentsList from "./StudentsList";
import StudentInfo from "./StudentInfo";
import info from "../../../img/info.svg";

function Students({
  students,
  handleSelectStudent,
  selectedStudent,
  studentLoading,
}) {
  console.log("SELECTED", selectedStudent);
  return (
    <div className="teacher__students">
      {selectedStudent ? (
        <StudentInfo
          selectedStudent={selectedStudent}
          studentLoading={studentLoading}
        />
      ) : (
        <div className="teacher__studentsInfo">
          <img src={info} alt="" />
          <h3>Student Info</h3>
        </div>
      )}

      <StudentsList
        students={students}
        handleSelectStudent={handleSelectStudent}
        selectedStudent={selectedStudent}
      />
    </div>
  );
}

export default Students;
