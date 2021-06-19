import React from "react";
import "./Students.css";
import StudentsTable from "./StudentsTable";
import { useAdminContext } from "../../../context/AdminContext";

function Students() {
  const { students } = useAdminContext();
  const getStudents = () => {
    return students.filter((student) => student.newEnrollee === false);
  };
  return (
    <div className="students">
      <StudentsTable students={getStudents()} />
    </div>
  );
}

export default Students;
