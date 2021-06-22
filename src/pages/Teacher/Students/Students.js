import React from "react";
import "./Students.css";
import StudentsList from "./StudentsList";
import StudentInfo from "./StudentInfo";

function Students({
  students,
  handleSelectStudent,
  selectedStudent,
  studentLoading,
}) {
  console.log("SELECTED", selectedStudent);
  return (
    <div className="teacher__students">
      <StudentInfo
        selectedStudent={selectedStudent}
        studentLoading={studentLoading}
      />
      <StudentsList
        students={students}
        handleSelectStudent={handleSelectStudent}
        selectedStudent={selectedStudent}
      />
    </div>
  );
}

export default Students;
