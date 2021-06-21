import React from "react";
import "./Students.css";
import StudentsList from "./StudentsList";
import { Avatar, TextField } from "@material-ui/core";

function Students({ students, handleSelectStudent, selectedStudent }) {
  console.log("SELECTED", selectedStudent);
  return (
    <div className="teacher__students">
      <div className="teacher__studentsContent">
        <div className="image__container">
          <Avatar alt="Remy Sharp" src="nonsense" />
        </div>
        <div className="info__container">
          <div className="row">
            <div className="col">
              <p>Firstname</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                disabled
                value={selectedStudent.firstname}
                // onChange={(e) => setSy(e.target.value)}
              />
            </div>

            <div className="col">
              <p>Lastname</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                disabled
                value={selectedStudent.lastname}
                // onChange={(e) => setSy(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <StudentsList
        students={students}
        handleSelectStudent={handleSelectStudent}
        selectedStudent={selectedStudent}
      />
    </div>
  );
}

export default Students;
