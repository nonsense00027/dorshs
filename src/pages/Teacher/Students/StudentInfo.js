import React from "react";
import { Avatar, TextField, CircularProgress } from "@material-ui/core";
import info from "../../../img/info.svg";

function StudentInfo({ selectedStudent, studentLoading }) {
  if (studentLoading) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          paddingRight: 350,
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return (
    <>
      {selectedStudent ? (
        <div className="teacher__studentsContent">
          <div className="image__container">
            <Avatar alt="Remy Sharp" src="nonsense" />
          </div>
          <div className="info__container">
            <div className="row">
              <div className="col">
                <p>LRN No.</p>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  disabled
                  value={selectedStudent ? selectedStudent.lrnNo : ""}
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
                  value={selectedStudent ? selectedStudent.lastname : ""}

                  // onChange={(e) => setSy(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Firstname</p>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  disabled
                  value={selectedStudent ? selectedStudent.firstname : ""}
                  // onChange={(e) => setSy(e.target.value)}
                />
              </div>

              <div className="col">
                <p>Middlename</p>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  disabled
                  value={selectedStudent ? selectedStudent.middlename : ""}

                  // onChange={(e) => setSy(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="teacher__studentsInfo">
          <img src={info} alt="" />
          <h3>Student Info</h3>
        </div>
      )}
    </>
  );
}

export default StudentInfo;
